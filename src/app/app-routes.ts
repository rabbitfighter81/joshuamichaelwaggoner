import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'About',
    pathMatch: 'full',
  },
  {
    path: 'About',
    loadChildren: './components/pages/about/about.module#AboutModule'
  },
  {
    path: 'Contact',
    loadChildren: './components/pages/contact/contact.module#ContactModule'
  },
  {
    path: 'Resume',
    loadChildren: './components/pages/resume/resume.module#ResumeModule'
  },
  {
    path: 'Projects',
    loadChildren: './components/pages/projects/projects.module#ProjectsModule'
  },
  {
    path: 'Greyhounds',
    loadChildren: './components/pages/greyhounds/greyhounds.module#GreyhoundsModule'
  },
  {
    path: 'Networks',
    loadChildren: './components/pages/networks/networks.module#NetworksModule'
  },
  {
    path: '404',
    loadChildren: './components/pages/not-found/not-found.module#NotFoundModule'
  },
  {
    path: 'Forbidden',
    loadChildren: './components/pages/not-found/not-found.module#NotFoundModule'
  },
  {
    path: 'Unauthorized',
    loadChildren: './components/pages/unauthorized/unauthorized.module#UnauthorizedModule'
  },
  {
    path: '**',
    loadChildren: './components/pages/not-found/not-found.module#NotFoundModule'
  },
];
