import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForbiddenRoutingModule } from './forbidden-routing.module';
import { ForbiddenComponent } from './forbidden.component';
import { SharedModule } from '../../../core/modules/shared/shared.module';

@NgModule({
  declarations: [ ForbiddenComponent ],
  imports: [
    CommonModule,
    SharedModule,
    ForbiddenRoutingModule
  ]
})
export class ForbiddenModule { }
