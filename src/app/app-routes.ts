import { Routes } from '@angular/router';
import { ForbiddenComponent } from './components/pages/forbidden/forbidden.component';
import { GreyhoundsComponent } from './components/pages/greyhounds/greyhounds.component';
import { NetworksComponent } from './components/pages/networks/networks.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { ResumeComponent } from './components/pages/resume/resume.component';
import { UnauthorizedComponent } from './components/pages/unauthorized/unauthorized.component';

export const appRoutes: Routes = [
  {
    path: 'users',
    loadChildren: './users/users.module#UsersModule'
  },
  {
    path: '',
    redirectTo: 'About',
    pathMatch: 'full',
  },
  {
    path: 'About',
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path: 'Contact',
    loadChildren: './contact/contact.module#ContactModule'
  },
  {
    path: 'Resume',
    component: ResumeComponent
  },
  {
    path: 'Projects',
    loadChildren: './projects/projects.module#ProjectsModule'
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
