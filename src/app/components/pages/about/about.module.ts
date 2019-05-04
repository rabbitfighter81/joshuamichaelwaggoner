import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AppMaterialModule } from 'src/app/core/modules/app-material/app-material.module';

@NgModule({
  declarations: [ AboutComponent ],
  imports: [
    CommonModule,
    AppMaterialModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }

