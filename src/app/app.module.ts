import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { AboutComponent } from './components/pages/about/about.component';
import { GreyhoundsComponent } from './components/pages/greyhounds/greyhounds.component';
import { ContactComponent } from './components/pages/contact/contact.component';
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
import { AppMaterialModule } from './modules/app-material/app-material.module';
import { RandomColorPipe } from './pipes/random-color/random-color.pipe';
import { SearchHighlightPipe } from './pipes/search-highlight/search-highlight.pipe';
import { ForbiddenComponent } from './components/pages/forbidden/forbidden.component';
import { UnauthorizedComponent } from './components/pages/unauthorized/unauthorized.component';
import { NetworksComponent } from './components/pages/networks/networks.component';
import { components } from './app-components';

@NgModule({
  declarations: [
    AppComponent,
    ...components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
