import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordDetailComponent } from '../../common/record-detail/record-detail.component';
import { DiscogsComponent } from './discogs.component';

const routes: Routes = [
  {
    path: '',
    component: DiscogsComponent,
  },
  {
    path: ':recordId',
    component: RecordDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscogsRoutingModule {}
