import { BehaviorSubject } from 'rxjs';

export class LoggingServiceMock {
  logging: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {}
  setLogging(shouldLog: boolean): void {}
  log(component: any, message: string, object: any): void {}
  err(component: any, error: any): void {}
}
