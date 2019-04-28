import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { GreyhoundsComponent } from './components/pages/greyhounds/greyhounds.component';
import { NetworksComponent } from './components/pages/networks/networks.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { ResumeComponent } from './components/pages/resume/resume.component';
import { WorkComponent } from './components/pages/work/work.component';
import { PipelineContainerComponent } from './components/pipeline-container/pipeline-container.component';
import { ColorPickerComponent } from './components/projects/color-picker/color-picker.component';
import { DiceRollerComponent } from './components/projects/dice-roller/dice-roller.component';
import { PasswordGeneratorComponent } from './components/projects/password-generator/password-generator.component';
import { RandColorTextComponent } from './components/projects/rand-color-text/rand-color-text.component';
import { SearchHighlightComponent } from './components/projects/search-highlight/search-highlight.component';
import { ToolbarFooterComponent } from './components/toolbar-footer/toolbar-footer.component';
import { ToolbarMainComponent } from './components/toolbar-main/toolbar-main.component';
import { RandomColorPipe } from './pipes/random-color/random-color.pipe';
import { SearchHighlightPipe } from './pipes/search-highlight/search-highlight.pipe';
import { ForbiddenComponent } from './components/pages/forbidden/forbidden.component';
import { UnauthorizedComponent } from './components/pages/unauthorized/unauthorized.component';
import { NavMainComponent } from './components/nav-main/nav-main.component';
import { SnackbarComingSoonComponent } from './components/snackbars/snackbar-coming-soon/snackbar-coming-soon.component';

const projects = [
  ColorPickerComponent,
  DiceRollerComponent,
  PasswordGeneratorComponent,
  RandColorTextComponent,
  SearchHighlightComponent,
];

const pipes = [
  RandomColorPipe,
  SearchHighlightPipe
];

const pages = [
  AboutComponent,
  ContactComponent,
  ForbiddenComponent,
  GreyhoundsComponent,
  NetworksComponent,
  PageNotFoundComponent,
  ResumeComponent,
  UnauthorizedComponent,
  WorkComponent,
];

const nav = [
  NavMainComponent,
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

const misc = [
  PipelineContainerComponent
];

export const components = [
  ...footer,
  ...header,
  ...misc,
  ...nav,
  ...pages,
  ...pipes,
  ...projects,
];
