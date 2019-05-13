import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../core/modules/shared/shared.module';
import { DiscogsService } from '../../../core/services/discogs/discogs.service';
import { DiscogsServiceMock } from '../../../core/services/discogs/discogs.service.mock';
import { TableDiscogsReleaseComponent } from './table-discogs-release.component';

describe('TableDiscogsReleaseComponent', () => {

  let component: TableDiscogsReleaseComponent;
  let fixture: ComponentFixture<TableDiscogsReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, CoreModule],
      providers: [{ provide: DiscogsService, useClass: DiscogsServiceMock }],
      declarations: [TableDiscogsReleaseComponent],
    }).compileComponents();
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
