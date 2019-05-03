import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NetworksRoutingModule } from './networks-routing.module';
import { NetworksComponent } from './networks.component';
import { SharedModule } from '../../../core/modules/shared/shared.module';

@NgModule({
  declarations: [ NetworksComponent ],
  imports: [
    SharedModule,
    CommonModule,
    NetworksRoutingModule
  ]
})
export class NetworksModule { }
