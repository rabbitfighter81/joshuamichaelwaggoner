import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
import { GreyhoundCardModule } from '../../../components/common/greyhound-card/greyhound-card.module';

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

@NgModule({
  imports: [
    CommonModule,
    ...components,
  ],
  exports: [
    ...components,
  ]
})
export class AppComponentsModule { }
