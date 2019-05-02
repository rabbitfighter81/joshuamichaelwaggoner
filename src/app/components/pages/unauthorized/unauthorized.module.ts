import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UnauthorizedRoutingModule } from './unauthorized-routing.module';
import { UnauthorizedComponent } from './unauthorized.component';

@NgModule({
  declarations: [ UnauthorizedComponent ],
  imports: [
    CommonModule,
    UnauthorizedRoutingModule
  ]
})
export class UnauthorizedModule { }
