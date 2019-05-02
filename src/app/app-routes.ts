import { Routes } from '@angular/router';

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
    loadChildren: './resume/resume.module#ResumeModule'
  },
  {
    path: 'Projects',
    loadChildren: './projects/projects.module#ProjectsModule'
  },
  {
    path: 'Greyhounds',
    loadChildren: './greyhounds/greyhounds.module#GreyhoundsModule'
  },
  {
    path: 'Networks',
    loadChildren: './networks/networks.module#NetworksModule'
  },
  {
    path: '404',
    loadChildren: './not-found/not-found.module#NotFoundModule'
  },
  {
    path: 'Forbidden',
    loadChildren: './not-found/not-found.module#NotFoundModule'
  },
  {
    path: 'Unauthorized',
    loadChildren: './unauthorized/unauthorized.module#UnauthorizedModule'
  },
  {
    path: '**',
    loadChildren: './not-found/not-found.module#NotFoundModule'
  },
];
