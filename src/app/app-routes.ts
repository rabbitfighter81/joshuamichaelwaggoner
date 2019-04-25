import { Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ForbiddenComponent } from './components/pages/forbidden/forbidden.component';
import { GreyhoundsComponent } from './components/pages/greyhounds/greyhounds.component';
import { NetworksComponent } from './components/pages/networks/networks.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { ResumeComponent } from './components/pages/resume/resume.component';
import { UnauthorizedComponent } from './components/pages/unauthorized/unauthorized.component';
import { WorkComponent } from './components/pages/work/work.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'Home',
    component: AboutComponent
  },
  {
    path: 'Contact',
    component: ContactComponent
  },
  {
    path: 'Resume',
    component: ResumeComponent
  },
  {
    path: 'Work',
    component: WorkComponent
  },
  {
    path: 'Greyhounds',
    component: GreyhoundsComponent
  },
  {
    path: 'Networks',
    component: NetworksComponent
  },
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  {
    path: 'Forbidden',
    component: ForbiddenComponent
  },
  {
    path: 'Unauthorized',
    component: UnauthorizedComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];
