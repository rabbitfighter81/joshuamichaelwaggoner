import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GreyhoundService } from './services/greyhound/greyhound.service';

const modules = [
  BrowserAnimationsModule
];

const services = [
  GreyhoundService
];

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
