import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NetworksRoutingModule } from './networks-routing.module';
import { NetworksComponent } from './networks.component';
import { AppMaterialModule } from '../../../core/modules/app-material/app-material.module';

@NgModule({
  declarations: [ NetworksComponent ],
  imports: [
    AppMaterialModule,
    CommonModule,
    NetworksRoutingModule
  ]
})
export class NetworksModule { }
