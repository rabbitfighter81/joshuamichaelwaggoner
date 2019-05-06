import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';
import { AppMaterialModule } from '../../../core/modules/app-material/app-material.module';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, AppMaterialModule, NotFoundRoutingModule],
})
export class NotFoundModule {}
