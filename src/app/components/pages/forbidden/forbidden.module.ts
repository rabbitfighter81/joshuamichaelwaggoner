import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForbiddenRoutingModule } from './forbidden-routing.module';
import { ForbiddenComponent } from './forbidden.component';

@NgModule({
  declarations: [ ForbiddenComponent ],
  imports: [
    CommonModule,
    ForbiddenRoutingModule
  ]
})
export class ForbiddenModule { }
