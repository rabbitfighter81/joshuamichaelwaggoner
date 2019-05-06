import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  logging: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  setLogging(shouldLog: boolean): void {
    this.logging.next(shouldLog);
  }

  log(component: any, message: string, object: any): void {
    console.log(component, message, object);
  }

  err(component: any, error: any): void {
    console.error(component, error);
  }
}
