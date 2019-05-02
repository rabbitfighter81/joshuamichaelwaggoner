import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreyhoundsComponent } from './greyhounds.component';

const routes: Routes = [
  {
    path: '',
    component: GreyhoundsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GreyhoundsRoutingModule { }
