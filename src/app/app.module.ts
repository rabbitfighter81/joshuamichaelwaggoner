import { AppMaterialModule } from './modules/app-material/app-material.module';
import { ActivismComponent } from './components/pages/activism/activism.component';
import { WorkComponent } from './components/pages/work/work.component';
import { ResumeComponent } from './components/pages/resume/resume.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { AboutComponent } from './components/pages/about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { NetworksComponent } from './components/networks/networks.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    ResumeComponent,
    WorkComponent,
    ActivismComponent,
    PipelineContainerComponent,
    DiceRollerComponent,
    ColorPickerComponent,
    PasswordGeneratorComponent,
    RandColorTextComponent,
    SearchHighlightComponent,
    ToolbarFooterComponent,
    ToolbarNavComponent,
    ToolbarMainComponent,
    RandomColorPipe,
    SearchHighlightPipe,
    NetworksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
