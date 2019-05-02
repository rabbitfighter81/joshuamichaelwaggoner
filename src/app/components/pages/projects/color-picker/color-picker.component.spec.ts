import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { assign } from 'lodash';
import { ColorPickerComponent } from './color-picker.component';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import { AppMaterialModule } from '../../../../core/modules/app-material/app-material.module';

describe('ColorPickerComponent', () => {

  let component: ColorPickerComponent;
  let fixture: ComponentFixture<ColorPickerComponent>;

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
      declarations: [ ColorPickerComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Form Initialization', () => {

    describe('When the form is initialized', () => {

      it('is valid', () => {
        expect(component.form.valid).toBeTruthy();
      });

      it('has a valid red value', () => {
        const red = component.form.get('red');
        expect(red.valid).toBeTruthy();
      });

      it('has a valid green value', () => {
        const green = component.form.get('green');
        expect(green.valid).toBeTruthy();
      });

      it('blue field is valid', () => {
        const blue = component.form.get('blue');
        expect(blue.valid).toBeTruthy();
      });

    });

    describe('Form functionality', () => {

      const validValue = {
        red: 10,
        green: 100,
        blue: 250
      };

      it('is valid when all values are present', () => {
        component.form.setValue(validValue);
        expect(component.form.valid).toBeTruthy();
      });

      it('is invalid when all values are not present', () => {
        component.form.setValue(assign({}, validValue, {
          red: null,
          green: null,
          blue: null
        }));
        expect(component.form.valid).toBeFalsy();
      });

      it('is invalid when red is not defined', () => {
        component.form.setValue(assign({}, validValue, {
          red: null
        }));
        expect(component.form.valid).toBeFalsy();
      });

      it('is invalid when green is not defined', () => {
        component.form.setValue(assign({}, validValue, {
          green: null
        }));
        expect(component.form.valid).toBeFalsy();
      });


      it('is invalid when blue is not defined', () => {
        component.form.setValue(assign({}, validValue, {
          blue: null
        }));
        expect(component.form.valid).toBeFalsy();
      });

    });

  });

  describe('Getters', () => {

    beforeEach(() => {
      component.colorValues = {
        red: 1,
        green: 2,
        blue: 3
      };
      component.ngOnInit();
    });

    afterEach(() => {
      component.colorValues = undefined;
      component.ngOnDestroy();
    });

    it(`red returns 1 if the red value in 'values' is 1`, () => {
      const { red } = component;
      expect(red).toEqual(1);
    });

    it(`green returns 2 if the green value in 'values' is 2`, () => {
      const { green } = component;
      expect(green).toEqual(2);
    });

    it(`blue returns 3 when the blue value in 'values' is 3`, () => {
      const { blue } = component;
      expect(blue).toEqual(3);
    });
  });
});
