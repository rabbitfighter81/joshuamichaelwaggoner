import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { AppMaterialModule } from './modules/app-material/app-material.module';
import { components, dialogs, snackbars } from './app-components';
import { SnackbarComingSoonComponent } from './components/snackbars/snackbar-coming-soon/snackbar-coming-soon.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './users/users.module';
import { PipesModule } from './pipes/pipes.module';
import { ProjectsModule } from './projects/projects.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavModule } from './nav/nav.module';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [
    AppComponent,
    ...components,
    SnackbarComingSoonComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppMaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PipesModule,
    ProjectsModule,
    ReactiveFormsModule,
    UsersModule,
    NavModule,
    ContactModule
  ],
  entryComponents: [
    ...dialogs,
    ...snackbars
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
