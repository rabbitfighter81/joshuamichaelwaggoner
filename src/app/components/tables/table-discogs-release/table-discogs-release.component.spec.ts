import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDiscogsReleaseComponent } from './table-discogs-release.component';
import { SharedModule } from 'src/app/core/modules/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { DiscogsService } from 'src/app/core/services/discogs/discogs.service';
import { DiscogsServiceMock } from 'src/app/core/services/discogs/discogs.service.mock';

describe('TableDiscogsReleaseComponent', () => {
  let component: TableDiscogsReleaseComponent;
  let fixture: ComponentFixture<TableDiscogsReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, CoreModule],
      providers: [
        { provide: DiscogsService, useClass: DiscogsServiceMock },
      ],
      declarations: [TableDiscogsReleaseComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDiscogsReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
