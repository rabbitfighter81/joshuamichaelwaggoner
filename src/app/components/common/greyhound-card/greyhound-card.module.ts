import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../core/modules/shared/shared.module';
import { GreyhoundCardComponent } from './greyhound-card.component';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [GreyhoundCardComponent],
  declarations: [GreyhoundCardComponent],
})
export class GreyhoundCardModule {}
