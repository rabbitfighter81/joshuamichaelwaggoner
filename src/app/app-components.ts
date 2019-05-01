import { GreyhoundsComponent } from './components/pages/greyhounds/greyhounds.component';
import { NetworksComponent } from './components/pages/networks/networks.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { ResumeComponent } from './components/pages/resume/resume.component';
import { ToolbarFooterComponent } from './components/toolbars/toolbar-footer/toolbar-footer.component';
import { ToolbarMainComponent } from './components/toolbars/toolbar-main/toolbar-main.component';
import { ForbiddenComponent } from './components/pages/forbidden/forbidden.component';
import { UnauthorizedComponent } from './components/pages/unauthorized/unauthorized.component';
import { SnackbarComingSoonComponent } from './components/snackbars/snackbar-coming-soon/snackbar-coming-soon.component';

const pages = [
  ForbiddenComponent,
  GreyhoundsComponent,
  NetworksComponent,
  PageNotFoundComponent,
  ResumeComponent,
  UnauthorizedComponent,
];

const header = [
  ToolbarMainComponent,
];

const footer = [
  ToolbarFooterComponent
];

export const dialogs = [
];

export const snackbars = [
  SnackbarComingSoonComponent
];

export const components = [
  ...footer,
  ...header,
  ...pages,
];
