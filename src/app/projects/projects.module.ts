import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../modules/app-material/app-material.module';
import { PipesModule } from '../pipes/pipes.module';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';
import { ProjectBaseComponent } from './base/project-base.component';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { RandColorTextComponent } from './rand-color-text/rand-color-text.component';
import { SearchHighlightComponent } from './search-highlight/search-highlight.component';

const projects = [
  ColorPickerComponent,
  DiceRollerComponent,
  PasswordGeneratorComponent,
  RandColorTextComponent,
  SearchHighlightComponent,
];

@NgModule({
  declarations: [
    ProjectBaseComponent,
    ProjectsComponent,
    ...projects,
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    PipesModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
  ],
})
export class ProjectsModule { }
