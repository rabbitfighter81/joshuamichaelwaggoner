import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DiscogsService } from '../../../core/services/discogs/discogs.service';
import { SharedModule } from '../../../core/modules/shared/shared.module';
import { TableDiscogsReleaseModule } from '../../tables/table-discogs-release/table-discogs-release.module';
import { RecordDetailComponent } from './record-detail.component';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule, TableDiscogsReleaseModule],
  providers: [DiscogsService],
  exports: [RecordDetailComponent],
  declarations: [RecordDetailComponent],
})
export class RecordDetailModule { }
