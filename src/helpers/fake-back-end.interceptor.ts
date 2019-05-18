import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { IGreyhound } from 'src/app/core/models/greyhound.model';
import assign from 'lodash.assign';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // array in local storage for registered users
    const pets: IGreyhound[] = JSON.parse(localStorage.getItem('greyhounds')) || [];

    // wrap in delayed observable to simulate server api call
    return of(null).pipe(mergeMap(() => {

      // authenticate
      if (request.url.endsWith('/api/greyhounds') && request.method === 'GET') {
        // find if any user matches login credentials
        const filteredPets = pets.filter((pet: IGreyhound) => {
          return pet.born === request.body.born
            && pet.color === request.body.color
            && pet.descriptions === request.body.descriptions
            && pet.earmark === request.body.earmark
            && pet.image === request.body.image
            && pet.kg === request.body.kg
            && pet.land === request.body.land
            && pet.lbs === request.body.lbs
            && pet.passed === request.body.passed
            && pet.racingowners === request.body.racingowners
            && pet.route === request.body.route;
        });

        console.log('Filtered pets: ', filteredPets);

        if (filteredPets.length) {
          // if login details are valid return 200 OK with user details and fake jwt token
          const pet = filteredPets[0];
          const body = assign({}, {
            born: pet.born,
            color: pet.color,
            descriptions: pet.descriptions,
            earmark: pet.earmark,
            image: pet.image,
            kg: pet.kg,
            land: pet.land,
            passed: pet.passed,
            racingowners: pet.racingowners,
            route: pet.route,
          } as IGreyhound, {
            token: 'fake-jwt-token'
          });

          return of(new HttpResponse({ status: 200, body }));
        } else {
          // else return 400 bad request
          return throwError({ error: { message: 'Could not get greyhounds' } });
        }
      }


      // get user by id
      if (request.url.match(/api\/greyhounds\/\d+$/) && request.method === 'GET') {

        const filteredPets = pets.filter((pet: IGreyhound) => {
          return pet.born === request.body.born
            && pet.color === request.body.color
            && pet.descriptions === request.body.descriptions
            && pet.earmark === request.body.earmark
            && pet.image === request.body.image
            && pet.kg === request.body.kg
            && pet.land === request.body.land
            && pet.lbs === request.body.lbs
            && pet.passed === request.body.passed
            && pet.racingowners === request.body.racingowners
            && pet.route === request.body.route;
        });

        // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
        if (filteredPets.length) {
          // find user by id in users array
          const urlParts = request.url.split('/');
          const id = urlParts[urlParts.length - 1];
          const matchedPets = filteredPets.filter(x => x.route === id);
          const pet = matchedPets.length ? matchedPets[0] : null;

          const body = assign({}, {
            born: pet.born,
            color: pet.color,
            descriptions: pet.descriptions,
            earmark: pet.earmark,
            image: pet.image,
            kg: pet.kg,
            land: pet.land,
            passed: pet.passed,
            racingowners: pet.racingowners,
            route: pet.route,
          } as IGreyhound, {
            token: 'fake-jwt-token'
          });

          return of(new HttpResponse({ status: 200, body }));
        } else {
          // return 401 not authorised if token is null or invalid
          return throwError({ error: { message: 'Could not locate greyhound' } });
        }
      }

      // pass through any requests not handled above
      return next.handle(request);

    }))
      // call materialize and dematerialize to ensure delay even
      // if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());
  }
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
