import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../../../core/modules/app-material/app-material.module';
import { NetworksRoutingModule } from './networks-routing.module';
import { NetworksComponent } from './networks.component';

@NgModule({
  declarations: [NetworksComponent],
  imports: [AppMaterialModule, CommonModule, NetworksRoutingModule],
})
export class NetworksModule {}



