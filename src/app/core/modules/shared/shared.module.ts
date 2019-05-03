import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../../pipes/pipes.module';
import { AppMaterialModule } from '../app-material/app-material.module';
import { RouterTestingModule } from '@angular/router/testing';

/**
 * The SharedModule should contain common components/pipes/directives and also export
 * commonly used Angular modules (like CommonModule from @angular/common for *ngIf directive).
 * You should have "dumb components" in SharedModule.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PipesModule,
    AppMaterialModule,
    RouterTestingModule
  ],
  exports: [
    PipesModule,
    AppMaterialModule,
    RouterTestingModule
  ]
})
export class SharedModule { }
