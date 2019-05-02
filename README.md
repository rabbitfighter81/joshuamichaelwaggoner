# www.joshuamichaelwaggoner.com

This is my personal app, built using Angular and Angular Material

## Screenshot for desktop and mobile breakpoints
![Desktop](https://i.imgur.com/2T4qmcN.png)
![Mobile](https://i.imgur.com/gLH0ckY.png)

## Technologies used
* Angular 7
* RxJs
* Express
* MongoDB
* Lodash

## Limitations and requirements
* You must have MongoDB installed
* You need to have Node

## Installation
* Execute `npm install` from root directory to grab all the necessary dependencies.

## Development server

* Run `npm run serve-en` for a dev server in English. Navigate to `http://localhost:4200/en/`. The app will automatically reload if you change any of the source files.
* For Spanish, execute `npm run serve-es`
* For German, execute `npm run serve-de`

## Author
* Joshua Michael Waggoner (<joshuamichaelwaggoner@gmail.com>)

## Licence
&copy; Joshua M. Waggoner

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

* Since this is a multi language `i18n` app, it has to be built for each locale.
* To build for just English locale, run `npm run build-localed`.
* To build for all locales, run `npm run locale-postbuild` which in turn runs `locale-postbuild.sh` script. This will take several minutes... 

## Running unit tests

* Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
* For better debuggin, execute `ng test --source-map=false`.

## Running end-to-end tests

Right now there are no e2e tests.
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
