import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GreyhoundCardComponent } from './greyhound-card.component';
import { SharedModule } from '../../../core/modules/shared/shared.module';
import { CoreModule } from '../../../core/core.module';

describe('GreyhoundCardComponent', () => {

  let component: GreyhoundCardComponent;
  let fixture: ComponentFixture<GreyhoundCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        CoreModule,
      ],
      declarations: [ GreyhoundCardComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreyhoundCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
