import { Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { ResumeComponent } from './components/pages/resume/resume.component';
import { WorkComponent } from './components/pages/work/work.component';
import { ActivismComponent } from './components/pages/activism/activism.component';

export const appRoutes: Routes = [
  { path: '',
    redirectTo: 'About',
    pathMatch: 'full'
  },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Resume', component: ResumeComponent },
  { path: 'Work', component: WorkComponent },
  { path: 'Activism', component: ActivismComponent },
  {
    path: '404',
    component: PageNotFoundComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];
