import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { assign } from 'lodash';
import { AppMaterialModule } from './../../../modules/app-material/app-material.module';
import { ColorPickerComponent } from './color-picker.component';

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

  describe('Form', () => {

    describe('initialization', () => {

      it('form is valid', () => {
        expect(component.form.valid).toBeTruthy();
      });

      it('red field is valid', () => {
        const red = component.form.get('red');
        expect(red.valid).toBeTruthy();
      });

      it('green field is valid', () => {
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
      component.values = {
        red: 1,
        green: 2,
        blue: 3
      };
      component.ngOnInit();
    });

    afterEach(() => {
      component.values = undefined;
      component.ngOnDestroy();
    });

    it(`red returns 1`, () => {
      const { red } = component;
      expect(red).toEqual(1);
    });

    it(`green returns 2`, () => {
      const { green } = component;
      expect(green).toEqual(2);
    });

    it(`blue returns 3`, () => {
      const { blue } = component;
      expect(blue).toEqual(3);
    });
  });
});
