import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../../../core/modules/app-material/app-material.module';
import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesComponent } from './resources.component';

@NgModule({
  declarations: [ResourcesComponent],
  imports: [
    AppMaterialModule,
    CommonModule,
    ResourcesRoutingModule
  ],
})
export class ResourcesModule { }
