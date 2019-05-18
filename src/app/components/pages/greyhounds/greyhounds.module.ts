import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../../../core/modules/app-material/app-material.module';
import { GreyhoundService } from '../../../core/services/greyhound/greyhound.service';
import { GreyhoundCardModule } from './greyhound-card/greyhound-card.module';
import { GreyhoundDetailModule } from './greyhound-detail/greyhound-detail.module';
import { GreyhoundsRoutingModule } from './greyhounds-routing.module';
import { GreyhoundsComponent } from './greyhounds.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    GreyhoundsRoutingModule,
    GreyhoundCardModule,
    GreyhoundDetailModule,
  ],
  providers: [GreyhoundService],
  declarations: [GreyhoundsComponent],
})
export class GreyhoundsModule {}
