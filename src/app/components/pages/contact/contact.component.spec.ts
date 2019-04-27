import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppMaterialModule } from './../../../modules/app-material/app-material.module';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {

  let component: ContactComponent;
  let fixture: ComponentFixture <ContactComponent> ;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
        imports: [
          AppMaterialModule,
          BrowserAnimationsModule,
          FormsModule,
          ReactiveFormsModule,
          RouterTestingModule,
        ],
        declarations: [ ContactComponent ],
        schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Form', () => {

    describe('initialization', () => {

      it('form is invalid', () => {
        component.ngOnInit();
        expect(component.form.valid).toBeFalsy();
      });

      it('email is invalid', () => {
        const email = component.form.get('email');
        expect(email.valid).toBeFalsy();
      });

      it('name field is invalid', () => {
        const name = component.form.get('name');
        expect(name.valid).toBeFalsy();
      });

      it('reason field is invalid', () => {
        const reason = component.form.get('reason');
        expect(reason.valid).toBeFalsy();
      });

      it('message field is invalid', () => {
        const message = component.form.get('message');
        expect(message.valid).toBeFalsy();
      });

    });

    describe('Form functionality', () => {

      it('is valid when all values are present and valid email', () => {
        component.ngOnInit();
        component.form.setValue({
          name: 'Edgar',
          email: 'edgar@allen.poe.com',
          reason: 'ravens',
          message: 'qoth the rave...'
        });
        expect(component.form.valid).toBeTruthy();
      });

      it('is invalid when email is not a valid email', () => {
        component.form.setValue({
          name: 'Edgar',
          email: 'edgar',
          reason: 'ravens',
          message: 'qoth the rave...'
        });
        expect(component.form.valid).toBeFalsy();
      });

      it('is invalid when email is not defined', () => {
        component.form.setValue({
          name: 'Edgar',
          email: null,
          reason: 'ravens',
          message: 'qoth the rave...'
        });
        expect(component.form.valid).toBeFalsy();
      });


      it('is invalid when name is not defined', () => {
        component.form.setValue({
          name: null,
          email: 'edgar',
          reason: 'ravens',
          message: 'qoth the rave...'
        });
        expect(component.form.valid).toBeFalsy();
      });

      it('is invalid when reason is not defined', () => {
        component.form.setValue({
          name: 'edgar',
          email: 'edgar@alan.poe.com',
          reason: null,
          message: 'qoth the rave...'
        });
        expect(component.form.valid).toBeFalsy();
      });

      it('is invalid when message is not defined', () => {
        component.form.setValue({
          name: 'edgar',
          email: 'edgar@alan.poe.com',
          reason: 'quoth the raven...',
          message: null
        });
        expect(component.form.valid).toBeFalsy();
      });

    });

  });
});
