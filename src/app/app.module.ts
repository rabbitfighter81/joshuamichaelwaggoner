import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { NavModule } from './components/nav/nav.module';
import { ContactModule } from './components/pages/contact/contact.module';
import { ForbiddenModule } from './components/pages/forbidden/forbidden.module';
import { GreyhoundsModule } from './components/pages/greyhounds/greyhounds.module';
import { NetworksModule } from './components/pages/networks/networks.module';
import { NotFoundModule } from './components/pages/not-found/not-found.module';
import { ProjectsModule } from './components/pages/projects/projects.module';
import { ResumeModule } from './components/pages/resume/resume.module';
import { UnauthorizedModule } from './components/pages/unauthorized/unauthorized.module';
import { AppMaterialModule } from './core/modules/app-material/app-material.module';
import { PipesModule } from './core/pipes/pipes.module';

const components = [
  ContactModule,
  FooterModule,
  ForbiddenModule,
  GreyhoundsModule,
  HeaderModule,
  NavModule,
  NetworksModule,
  NotFoundModule,
  ResumeModule,
  UnauthorizedModule,
  ProjectsModule,
];

const shared = [
  AppMaterialModule,
  PipesModule,
  AppRoutingModule,
];

const external = [
  BrowserAnimationsModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
];

@NgModule({
  imports: [
    ...external,
    ...shared,
    ...components,
  ],
  entryComponents: [
  ],
  providers: [],
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ]
})
export class AppModule { }
