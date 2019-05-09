import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadChildren: './components/pages/about/about.module#AboutModule',
  },
  {
    path: 'resume',
    loadChildren: './components/pages/resume/resume.module#ResumeModule',
  },
  {
    path: 'contact',
    loadChildren: './components/pages/contact/contact.module#ContactModule',
  },
  {
    path: 'projects',
    loadChildren: './components/pages/projects/projects.module#ProjectsModule',
  },
  {
    path: 'greyhounds',
    loadChildren:
      './components/pages/greyhounds/greyhounds.module#GreyhoundsModule',
  },
  {
    path: 'networks',
    loadChildren: './components/pages/networks/networks.module#NetworksModule',
  },
  {
    path: 'resources',
    loadChildren: './components/pages/resources/resources.module#ResourcesModule',
  },
  {
    path: 'discogs',
    loadChildren: './components/pages/discogs/discogs.module#DiscogsModule',
  },
  {
    path: '404',
    loadChildren:
      './components/pages/not-found/not-found.module#NotFoundModule',
  },
  {
    path: 'forbidden',
    redirectTo: '404',
  },
  {
    path: 'unauthorized',
    loadChildren:
      './components/pages/unauthorized/unauthorized.module#UnauthorizedModule',
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
