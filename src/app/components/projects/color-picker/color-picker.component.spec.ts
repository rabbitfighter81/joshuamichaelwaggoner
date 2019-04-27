import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

    component.ngOnInit();
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

      it('is invalid when all values are present and valid email', () => {
        component.form.setValue({
          red: null,
          green: null,
          blue: null
        });
        expect(component.form.valid).toBeFalsy();
      });

      it('is invalid when red is not defined', () => {
        component.form.setValue({
          red: null,
          green: 100,
          blue: 100
        });
        expect(component.form.valid).toBeFalsy();
      });

      it('is invalid when green is not defined', () => {
        component.form.setValue({
          red: 100,
          green: null,
          blue: 100
        });
        expect(component.form.valid).toBeFalsy();
      });


      it('is invalid when blue is not defined', () => {
        component.form.setValue({
          red: 100,
          green: 100,
          blue: null
        });
        expect(component.form.valid).toBeFalsy();
      });

    });

  });
});
