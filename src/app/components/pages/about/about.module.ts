import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../../../core/modules/app-material/app-material.module';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [ AboutComponent ],
  imports: [
    CommonModule,
    AppMaterialModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }

