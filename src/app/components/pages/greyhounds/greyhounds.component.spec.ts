import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/core/modules/shared/shared.module';
import { GreyhoundService } from 'src/app/core/services/greyhound/greyhound.service';
import { GreyhoundServiceMock } from 'src/app/core/services/greyhound/greyhound.service.mock';
import { GreyhoundsComponent } from './greyhounds.component';
import { GreyhoundCardComponent } from '../../common/greyhound-card/greyhound-card.component';

describe('GreyhoundsComponent', () => {

  let component: GreyhoundsComponent;
  let fixture: ComponentFixture<GreyhoundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        SharedModule,
      ],
      providers: [
        { provide: GreyhoundService, useClass: GreyhoundServiceMock }
      ],
      declarations: [ GreyhoundsComponent, GreyhoundCardComponent ],
    })
    .compileComponents();
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
