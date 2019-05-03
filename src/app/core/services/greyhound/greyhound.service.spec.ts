import { TestBed } from '@angular/core/testing';
import { CoreModule } from '../../core.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { GreyhoundService } from './greyhound.service';
import { GreyhoundServiceMock } from './greyhound.service.mock';

describe('GreyhoundService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      SharedModule,
      CoreModule
    ],
    providers: [
      { provide: GreyhoundService, useClass: GreyhoundServiceMock },
    ]
  }));

  it('should be created', () => {
    const service: GreyhoundService = TestBed.get(GreyhoundService);
    expect(service).toBeTruthy();
  });
});
