import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GreyhoundCardComponent } from './greyhound-card.component';
import { SharedModule } from 'src/app/core/modules/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [ GreyhoundCardComponent ],
  declarations: [ GreyhoundCardComponent ]
})
export class GreyhoundCardModule { }
