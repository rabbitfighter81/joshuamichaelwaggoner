import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../core/modules/shared/shared.module';
import { GreyhoundService } from '../../../core/services/greyhound/greyhound.service';
import { TableGreyhoundModule } from '../../tables/table-greyhound/table-greyhound.module';
import { GreyhoundDetailComponent } from './greyhound-detail.component';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule, TableGreyhoundModule],
  providers: [GreyhoundService],
  exports: [GreyhoundDetailComponent],
  declarations: [GreyhoundDetailComponent],
})
export class GreyhoundDetailModule {}
