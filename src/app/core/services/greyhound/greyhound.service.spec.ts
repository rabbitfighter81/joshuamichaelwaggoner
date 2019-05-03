import { TestBed } from '@angular/core/testing';

import { GreyhoundService } from './greyhound.service';
import { SharedModule } from '../../modules/shared/shared.module';
import { CoreModule } from '../../core.module';

describe('GreyhoundService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      SharedModule,
      CoreModule
    ],
    providers: [
      GreyhoundService
    ]
  }));

  it('should be created', () => {
    const service: GreyhoundService = TestBed.get(GreyhoundService);
    expect(service).toBeTruthy();
  });
});
