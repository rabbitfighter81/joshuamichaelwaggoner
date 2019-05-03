import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../core/modules/shared/shared.module';
import { ProjectBaseComponent } from './base/project-base.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
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
    SharedModule,
    CommonModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
  ],
})
export class ProjectsModule { }
