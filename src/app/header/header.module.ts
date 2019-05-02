import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AppMaterialModule } from '../modules/app-material/app-material.module';
import { AboutRoutingModule } from '../components/pages/about/about-routing.module';

@NgModule({
  declarations: [ HeaderComponent ],
  imports: [
    CommonModule,
    AppMaterialModule,
    AboutRoutingModule
  ]
})
export class HeaderModule { }
