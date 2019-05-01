import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { SnackbarComingSoonComponent } from '../components/snackbars/snackbar-coming-soon/snackbar-coming-soon.component';

@NgModule({
  declarations: [ UsersListComponent ],
  imports: [
    CommonModule,
    UsersRoutingModule,
  ],
})
export class UsersModule { }
