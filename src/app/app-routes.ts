import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    loadChildren: './components/pages/welcome/welcome.module#WelcomeModule',
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
    path: 'discogs',
    loadChildren: './components/pages/discogs/discogs.module#DiscogsModule',
  },
  {
    path: 'about',
    loadChildren: './components/pages/about/about.module#AboutModule',
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
    path: '404',
    loadChildren:
      './components/pages/not-found/not-found.module#NotFoundModule',
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
