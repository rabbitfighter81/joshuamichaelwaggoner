import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../../../core/modules/app-material/app-material.module';
import { DiscogsService } from '../../../core/services/discogs/discogs.service';
import { RecordCardModule } from '../../common/record-card/record-card.module';
import { RecordDetailModule } from '../../common/record-detail/record-detail.module';
import { MusicRoutingModule } from './music-routing.module';
import { MusicComponent } from './music.component';

@NgModule({
  imports: [
    AppMaterialModule,
    CommonModule,
    MusicRoutingModule,
    RecordCardModule,
    RecordDetailModule,
  ],
  providers: [DiscogsService],
  declarations: [MusicComponent],
})
export class MusicModule { }


