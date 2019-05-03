import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../../../core/modules/shared/shared.module';
import { GreyhoundCardComponent } from '../../common/greyhound-card/greyhound-card.component';
import { GreyhoundCardModule } from '../../common/greyhound-card/greyhound-card.module';

@NgModule({
  declarations: [ ContactComponent ],
  imports: [
    SharedModule,
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    GreyhoundCardModule
  ]
})
export class ContactModule { }
