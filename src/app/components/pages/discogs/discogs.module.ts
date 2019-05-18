import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../../../core/modules/app-material/app-material.module';
import { DiscogsService } from '../../../core/services/discogs/discogs.service';
import { RecordCardModule } from './record-card/record-card.module';
import { RecordDetailModule } from './record-detail/record-detail.module';
import { DiscogsRoutingModule } from './discogs-routing.module';
import { DiscogsComponent } from './discogs.component';

@NgModule({
  imports: [
    AppMaterialModule,
    CommonModule,
    DiscogsRoutingModule,
    RecordCardModule,
    RecordDetailModule,
  ],
  providers: [DiscogsService],
  declarations: [DiscogsComponent],
})
export class DiscogsModule {}
