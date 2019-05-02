import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { NavModule } from 'src/app/components/nav/nav.module';
import { ContactModule } from 'src/app/components/pages/contact/contact.module';
import { ForbiddenModule } from 'src/app/components/pages/forbidden/forbidden.module';
import { GreyhoundsModule } from 'src/app/components/pages/greyhounds/greyhounds.module';
import { NetworksModule } from 'src/app/components/pages/networks/networks.module';
import { NotFoundModule } from 'src/app/components/pages/not-found/not-found.module';
import { ProjectsModule } from 'src/app/components/pages/projects/projects.module';
import { ResumeModule } from 'src/app/components/pages/resume/resume.module';
import { UnauthorizedModule } from 'src/app/components/pages/unauthorized/unauthorized.module';

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
  declarations: [],
  imports: [
    CommonModule,
    ...components,
  ],
  exports: [
    ...components,
  ]
})
export class AppComponentsModule { }
