import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppMaterialModule } from './../../modules/app-material/app-material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarFooterComponent } from './toolbar-footer.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ToolbarFooterComponent', () => {
  let component: ToolbarFooterComponent;
  let fixture: ComponentFixture<ToolbarFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      declarations: [ ToolbarFooterComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
