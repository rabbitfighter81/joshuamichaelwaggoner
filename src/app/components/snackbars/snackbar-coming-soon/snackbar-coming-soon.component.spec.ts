import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { AppMaterialModule } from '../../../modules/app-material/app-material.module';
import { SnackbarComingSoonComponent } from './snackbar-coming-soon.component';

describe('SnackbarComingSoonComponent', () => {

  let component: SnackbarComingSoonComponent;
  let fixture: ComponentFixture<SnackbarComingSoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: MAT_SNACK_BAR_DATA,
          useValue: { feature: 'Something' }
        },
      ],
      declarations: [ SnackbarComingSoonComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarComingSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
