import { NgModule } from '@angular/core';
import { GreyhoundsRoutingModule } from './greyhounds-routing.module';
import { GreyhoundsComponent } from './greyhounds.component';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../../../core/modules/app-material/app-material.module';
import { GreyhoundCardModule } from '../../common/greyhound-card/greyhound-card.module';
import { GreyhoundDetailModule } from '../../common/greyhound-detail/greyhound-detail.module';
import { GreyhoundService } from 'src/app/core/services/greyhound/greyhound.service';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    GreyhoundsRoutingModule,
    GreyhoundCardModule,
    GreyhoundDetailModule
  ],
  providers: [
    GreyhoundService
  ],
  declarations: [ GreyhoundsComponent ],
})
export class GreyhoundsModule { }
