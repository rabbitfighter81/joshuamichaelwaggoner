import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GreyhoundService } from './services/greyhound/greyhound.service';

const modules = [
  BrowserAnimationsModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
];

const services = [
  GreyhoundService
];

/**
 * CoreModule should definitely contain your singleton services,
 * single-instance components,and export any third-party modules
 * needed in AppModule
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules,
  ],
  exports: [
    ...modules,
  ],
  providers: [
    ...services
  ]
})
export class CoreModule { }
