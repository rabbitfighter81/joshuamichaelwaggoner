import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from '../../../../core/modules/app-material/app-material.module';
import { DiceRollerComponent } from './dice-roller.component';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

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
      ],
      providers: [
        {
          provide: MAT_SNACK_BAR_DATA,
          useValue: { feature: 'Color Picker' }
        },
      ],
      declarations: [ DiceRollerComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
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

  describe('Form', () => {

    describe('initialization', () => {

      it('form is invalid', () => {
        expect(component.form.valid).toBeFalsy();
      });

      it('diceCount field is invalid', () => {
        const diceCount = component.form.get('diceCount');
        expect(diceCount.valid).toBeFalsy();
      });

      it('diceSides field is invalid', () => {
        const diceSides = component.form.get('diceSides');
        expect(diceSides.valid).toBeFalsy();
      });

    });

    describe('Form functionality', () => {

      it('is valid when all values are present', () => {
        component.form.setValue({
          diceCount: 1000,
          diceSides: 1000
        });
        expect(component.form.valid).toBeTruthy();
      });

      it('is invalid when all values are not present', () => {
        component.form.setValue({
          diceCount: null,
          diceSides: null
        });
        expect(component.form.valid).toBeFalsy();
      });

      it('is invalid when diceCount is not defined', () => {
        component.form.setValue({
          diceCount: null,
          diceSides: 10
        });
        expect(component.form.valid).toBeFalsy();
      });

      it('is invalid when diceSides is not defined', () => {
        component.form.setValue({
          diceCount: 10,
          diceSides: null
        });
        expect(component.form.valid).toBeFalsy();
      });

    });

  });
});
