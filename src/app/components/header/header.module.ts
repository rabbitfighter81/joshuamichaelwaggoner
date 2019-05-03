import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AboutRoutingModule } from '../pages/about/about-routing.module';
import { SharedModule } from '../../core/modules/shared/shared.module';

@NgModule({
  declarations: [ HeaderComponent ],
  imports: [
    CommonModule,
    SharedModule,
    AboutRoutingModule
  ],
  exports: [ HeaderComponent ]
})
export class HeaderModule { }
