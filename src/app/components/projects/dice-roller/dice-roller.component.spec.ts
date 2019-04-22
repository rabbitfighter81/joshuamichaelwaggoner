import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppMaterialModule } from './../../../modules/app-material/app-material.module';
import { ReducerModule } from './../../../modules/reducer/reducer.module';
import { DiceRollerComponent } from './dice-roller.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DiceRollerComponent', () => {

  let component: DiceRollerComponent;
  let fixture: ComponentFixture<DiceRollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule,
        ReducerModule
      ],
      declarations: [ DiceRollerComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceRollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
