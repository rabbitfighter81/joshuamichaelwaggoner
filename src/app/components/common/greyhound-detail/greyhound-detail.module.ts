import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GreyhoundDetailComponent } from './greyhound-detail.component';
import { SharedModule } from '../../../core/modules/shared/shared.module';
import { RouterModule } from '@angular/router';
import { TableGreyhoundModule } from '../../tables/table-greyhound/table-greyhound.module';
import { GreyhoundService } from 'src/app/core/services/greyhound/greyhound.service';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule, TableGreyhoundModule],
  providers: [GreyhoundService],
  exports: [GreyhoundDetailComponent],
  declarations: [GreyhoundDetailComponent],
})
export class GreyhoundDetailModule {}
