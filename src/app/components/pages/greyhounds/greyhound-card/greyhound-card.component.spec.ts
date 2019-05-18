import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../../../../core/core.module';
import { SharedModule } from '../../../../core/modules/shared/shared.module';
import { GreyhoundCardComponent } from './greyhound-card.component';

describe('GreyhoundCardComponent', () => {
  let component: GreyhoundCardComponent;
  let fixture: ComponentFixture<GreyhoundCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, CoreModule, RouterTestingModule],
      declarations: [GreyhoundCardComponent],
    }).compileComponents();
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
