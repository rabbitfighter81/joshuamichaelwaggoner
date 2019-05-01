import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { AppMaterialModule } from './modules/app-material/app-material.module';
import { components, dialogs, snackbars } from './app-components';
import { SnackbarComingSoonComponent } from './components/snackbars/snackbar-coming-soon/snackbar-coming-soon.component';
import { ProjectBaseComponent } from './components/projects/project-base/project-base.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    ...components,
    SnackbarComingSoonComponent,
    ProjectBaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UsersModule
  ],
  entryComponents: [
    ...dialogs,
    ...snackbars
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
