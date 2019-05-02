
import { ToolbarFooterComponent } from './components/toolbars/toolbar-footer/toolbar-footer.component';
import { ToolbarMainComponent } from './components/toolbars/toolbar-main/toolbar-main.component';
import { SnackbarComingSoonComponent } from './components/snackbars/snackbar-coming-soon/snackbar-coming-soon.component';


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
];
