import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreyhoundsComponent } from './greyhounds.component';
import { GreyhoundDetailComponent } from '../../common/greyhound-detail/greyhound-detail.component';

const routes: Routes = [
  {
    path: '',
    component: GreyhoundsComponent,
  },
  {
    path: 'greyhounds/:greyhound',
    component: GreyhoundDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GreyhoundsRoutingModule {}
