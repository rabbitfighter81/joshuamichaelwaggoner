import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreyhoundDetailComponent } from '../../common/greyhound-detail/greyhound-detail.component';
import { GreyhoundsComponent } from './greyhounds.component';

const routes: Routes = [
  {
    path: '',
    component: GreyhoundsComponent,
  },
  {
    path: ':greyhound',
    component: GreyhoundDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GreyhoundsRoutingModule {}
