import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../core/modules/shared/shared.module';
import { DiscogsService } from '../../../core/services/discogs/discogs.service';
import { DiscogsServiceMock } from '../../../core/services/discogs/discogs.service.mock';
import { TableDiscogsReleaseModule } from '../../tables/table-discogs-release/table-discogs-release.module';
import { RecordDetailComponent } from './record-detail.component';

describe('RecordDetailComponent', () => {
  let component: RecordDetailComponent;
  let fixture: ComponentFixture<RecordDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        CoreModule,
        RouterTestingModule,
        TableDiscogsReleaseModule,
      ],
      providers: [
        { provide: DiscogsService, useClass: DiscogsServiceMock },
      ],
      declarations: [RecordDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
