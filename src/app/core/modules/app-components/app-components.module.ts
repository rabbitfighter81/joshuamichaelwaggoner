import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GreyhoundCardModule } from '../../../components/common/greyhound-card/greyhound-card.module';
import { FooterModule } from '../../../components/footer/footer.module';
import { HeaderModule } from '../../../components/header/header.module';
import { NavModule } from '../../../components/nav/nav.module';
import { ContactModule } from '../../../components/pages/contact/contact.module';
import { ForbiddenModule } from '../../../components/pages/forbidden/forbidden.module';
import { GreyhoundsModule } from '../../../components/pages/greyhounds/greyhounds.module';
import { NetworksModule } from '../../../components/pages/networks/networks.module';
import { NotFoundModule } from '../../../components/pages/not-found/not-found.module';
import { ProjectsModule } from '../../../components/pages/projects/projects.module';
import { ResumeModule } from '../../../components/pages/resume/resume.module';
import { UnauthorizedModule } from '../../../components/pages/unauthorized/unauthorized.module';
import { AboutModule } from '../../../components/pages/about/about.module';

const modules = [
  AboutModule,
  ContactModule,
  FooterModule,
  ForbiddenModule,
  GreyhoundCardModule,
  GreyhoundsModule,
  HeaderModule,
  NavModule,
  NetworksModule,
  NotFoundModule,
  ProjectsModule,
  ResumeModule,
  UnauthorizedModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...modules,
  ],
  exports: [
    ...modules,
  ]
})
export class AppComponentsModule { }
