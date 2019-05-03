import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/core/modules/shared/shared.module';
import { GreyhoundCardComponent } from './greyhound-card.component';

@NgModule({
  declarations: [ GreyhoundCardComponent ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class GreyhoundCardModule { }
