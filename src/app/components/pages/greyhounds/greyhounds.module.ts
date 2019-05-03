import { NgModule } from '@angular/core';
import { GreyhoundCardComponent } from '../../common/greyhound-card/greyhound-card.component';
import { GreyhoundCardModule } from '../../common/greyhound-card/greyhound-card.module';
import { GreyhoundsRoutingModule } from './greyhounds-routing.module';
import { GreyhoundsComponent } from './greyhounds.component';

@NgModule({
  declarations: [
    GreyhoundsComponent,
    GreyhoundCardComponent
  ],
  imports: [
    GreyhoundCardModule,
    GreyhoundsRoutingModule
  ]
})
export class GreyhoundsModule { }
