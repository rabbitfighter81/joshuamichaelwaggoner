import { TestBed } from '@angular/core/testing';
import { CoreModule } from '../../core.module';
import { SharedModule } from '../../modules/shared/shared.module';
import { DiscogsService } from './discogs.service';
import { DiscogsServiceMock } from './discogs.service.mock';

describe('DiscogsService', () => {

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [SharedModule, CoreModule],
      providers: [
        { provide: DiscogsService, useClass: DiscogsServiceMock },
      ],
    }),
  );

  it('should be created', () => {
    const service: DiscogsService = TestBed.get(DiscogsService);
    expect(service).toBeTruthy();
  });
});
