import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { AppMaterialModule } from 'src/app/modules/app-material/app-material.module';

@NgModule({
  declarations: [ ContactComponent ],
  imports: [
    AppMaterialModule,
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class ContactModule { }
