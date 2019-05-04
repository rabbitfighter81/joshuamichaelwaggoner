import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from 'src/app/core/modules/app-material/app-material.module';
import { GreyhoundCardComponent } from './greyhound-card.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [ GreyhoundCardComponent ],
  declarations: [ GreyhoundCardComponent ]
})
export class GreyhoundCardModule { }
