import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GreyhoundService } from 'src/app/core/services/greyhound/greyhound.service';
import { SharedModule } from '../../../core/modules/shared/shared.module';
import { TableGreyhoundModule } from '../../tables/table-greyhound/table-greyhound.module';
import { GreyhoundDetailComponent } from './greyhound-detail.component';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule, TableGreyhoundModule],
  providers: [GreyhoundService],
  exports: [GreyhoundDetailComponent],
  declarations: [GreyhoundDetailComponent],
})
export class GreyhoundDetailModule {}
