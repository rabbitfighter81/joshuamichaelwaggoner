import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AboutRoutingModule } from '../pages/about/about-routing.module';
import { SharedModule } from '../../core/modules/shared/shared.module';
import { AppMaterialModule } from 'src/app/core/modules/app-material/app-material.module';

@NgModule({
  declarations: [ HeaderComponent ],
  imports: [
    CommonModule,
    AppMaterialModule,
    AboutRoutingModule
  ],
  exports: [ HeaderComponent ]
})
export class HeaderModule { }
