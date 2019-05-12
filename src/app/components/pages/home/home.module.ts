import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../../core/modules/app-material/app-material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    AppMaterialModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HomeRoutingModule,
  ],
})
export class HomeModule {}
