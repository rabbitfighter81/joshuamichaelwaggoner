import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlideshowModule } from 'ng-simple-slideshow';
import { AppMaterialModule } from '../../../core/modules/app-material/app-material.module';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    AppMaterialModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    WelcomeRoutingModule,
    SlideshowModule,
  ],
})
export class WelcomeModule {}
