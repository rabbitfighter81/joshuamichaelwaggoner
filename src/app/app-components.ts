import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { ResumeComponent } from './components/pages/resume/resume.component';
import { WorkComponent } from './components/pages/work/work.component';
import { PipelineContainerComponent } from './components/pipeline-container/pipeline-container.component';
import { DiceRollerComponent } from './components/projects/dice-roller/dice-roller.component';
import { ColorPickerComponent } from './components/projects/color-picker/color-picker.component';
import { PasswordGeneratorComponent } from './components/projects/password-generator/password-generator.component';
import { RandColorTextComponent } from './components/projects/rand-color-text/rand-color-text.component';
import { SearchHighlightComponent } from './components/projects/search-highlight/search-highlight.component';
import { ToolbarFooterComponent } from './components/toolbar-footer/toolbar-footer.component';
import { ToolbarNavComponent } from './components/toolbar-nav/toolbar-nav.component';
import { ToolbarMainComponent } from './components/toolbar-main/toolbar-main.component';
import { RandomColorPipe } from './pipes/random-color/random-color.pipe';
import { SearchHighlightPipe } from './pipes/search-highlight/search-highlight.pipe';
import { GreyhoundsComponent } from './components/pages/greyhounds/greyhounds.component';


const projects = [
  RandColorTextComponent,
  SearchHighlightComponent,
  ColorPickerComponent,
  PasswordGeneratorComponent,
  DiceRollerComponent
];

const pipes = [
  RandomColorPipe,
  SearchHighlightPipe
];

const pages = [
  AboutComponent,
  GreyhoundsComponent,
  ContactComponent,
  PageNotFoundComponent,
  ResumeComponent,
  WorkComponent,
];

const header = [
  ToolbarMainComponent,
  ToolbarNavComponent,
];

const footer = [
  ToolbarFooterComponent
];

const misc = [
  PipelineContainerComponent
];

export const components = [
  ...projects,
  ...pipes,
  ...pages,
  ...header,
  ...footer,
  ...misc
];
