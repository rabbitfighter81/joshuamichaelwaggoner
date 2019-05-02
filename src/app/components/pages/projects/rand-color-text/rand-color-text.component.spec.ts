import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { AppMaterialModule } from '../../../../core/modules/app-material/app-material.module';
import { RandomColorPipe } from '../../../pipes/random-color/random-color.pipe';
import { RandColorTextComponent } from './rand-color-text.component';

describe('RandColorTextComponent', () => {

  let component: RandColorTextComponent;
  let fixture: ComponentFixture<RandColorTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      providers: [
        {
          provide: MAT_SNACK_BAR_DATA,
          useValue: { feature: 'Random Color Text' }
        },
      ],
      declarations: [ RandColorTextComponent, RandomColorPipe ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandColorTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
