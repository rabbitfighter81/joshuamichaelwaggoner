import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { AboutRoutingModule } from '../components/pages/about/about-routing.module';
import { AppMaterialModule } from '../modules/app-material/app-material.module';

@NgModule({
  declarations: [ FooterComponent ],
  imports: [
    CommonModule,
    AppMaterialModule,
    AboutRoutingModule
  ]
})
export class FooterModule { }

