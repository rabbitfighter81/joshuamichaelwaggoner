import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GreyhoundCardModule } from '../../../components/common/greyhound-card/greyhound-card.module';
import { GreyhoundDetailModule } from '../../../components/common/greyhound-detail/greyhound-detail.module';
import { FooterModule } from '../../../components/footer/footer.module';
import { HeaderModule } from '../../../components/header/header.module';
import { NavModule } from '../../../components/nav/nav.module';
import { AboutModule } from '../../../components/pages/about/about.module';
import { ContactModule } from '../../../components/pages/contact/contact.module';
import { ForbiddenModule } from '../../../components/pages/forbidden/forbidden.module';
import { GreyhoundsModule } from '../../../components/pages/greyhounds/greyhounds.module';
import { NetworksModule } from '../../../components/pages/networks/networks.module';
import { NotFoundModule } from '../../../components/pages/not-found/not-found.module';
import { ProjectsModule } from '../../../components/pages/projects/projects.module';
import { ResumeModule } from '../../../components/pages/resume/resume.module';
import { UnauthorizedModule } from '../../../components/pages/unauthorized/unauthorized.module';
import { TableGreyhoundModule } from '../../../components/tables/table-greyhound/table-greyhound.module';
import { DiscogsModule } from 'src/app/components/pages/discogs/discogs.module';
import { RecordCardModule } from 'src/app/components/common/record-card/record-card.module';
import { RecordDetailModule } from 'src/app/components/common/record-detail/record-detail.module';

const modules = [
  AboutModule,
  ContactModule,
  FooterModule,
  ForbiddenModule,
  GreyhoundCardModule,
  GreyhoundDetailModule,
  GreyhoundsModule,
  HeaderModule,
  DiscogsModule,
  NavModule,
  NetworksModule,
  NotFoundModule,
  ProjectsModule,
  RecordCardModule,
  RecordDetailModule,
  ResumeModule,
  TableGreyhoundModule,
  UnauthorizedModule,
];

@NgModule({
  imports: [CommonModule, ...modules],
  exports: [...modules],
})
export class AppComponentsModule {}
