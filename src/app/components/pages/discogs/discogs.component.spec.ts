import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../core/modules/shared/shared.module';
import { DiscogsService } from '../../../core/services/discogs/discogs.service';
import { DiscogsServiceMock } from '../../../core/services/discogs/discogs.service.mock';
import { RecordCardComponent } from './record-card/record-card.component';
import { DiscogsComponent } from './discogs.component';

describe('DiscogsModule', () => {
  let component: DiscogsComponent;
  let fixture: ComponentFixture<DiscogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, SharedModule],
      providers: [{ provide: DiscogsService, useClass: DiscogsServiceMock }],
      declarations: [RecordCardComponent, DiscogsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
