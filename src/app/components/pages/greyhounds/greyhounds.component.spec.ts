import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../../core/modules/shared/shared.module';
import { GreyhoundService } from '../../../core/services/greyhound/greyhound.service';
import { GreyhoundServiceMock } from '../../../core/services/greyhound/greyhound.service.mock';
import { GreyhoundCardComponent } from '../../common/greyhound-card/greyhound-card.component';
import { GreyhoundsComponent } from './greyhounds.component';

describe('GreyhoundsComponent', () => {
  let component: GreyhoundsComponent;
  let fixture: ComponentFixture<GreyhoundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, SharedModule],
      providers: [
        { provide: GreyhoundService, useClass: GreyhoundServiceMock },
      ],
      declarations: [GreyhoundsComponent, GreyhoundCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreyhoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
