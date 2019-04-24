import { Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { ActivismComponent } from './components/pages/activism/activism.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ForbiddenComponent } from './components/pages/forbidden/forbidden.component';
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
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: 'activism',
    component: ActivismComponent
  },
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];
