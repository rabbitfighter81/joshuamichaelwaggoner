import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/core/modules/shared/shared.module';
import { DiscogsService } from 'src/app/core/services/discogs/discogs.service';
import { DiscogsServiceMock } from 'src/app/core/services/discogs/discogs.service.mock';
import { RecordDetailComponent } from './record-detail.component';

describe('RecordDetailComponent', () => {

  let component: RecordDetailComponent;
  let fixture: ComponentFixture<RecordDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        CoreModule,
        RouterTestingModule
      ],
      providers: [
        { provide: DiscogsService, useClass: DiscogsServiceMock },
      ],
      declarations: [RecordDetailComponent],
    })
    .compileComponents();
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
