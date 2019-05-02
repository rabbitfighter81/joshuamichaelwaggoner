import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { AppMaterialModule } from '../modules/app-material/app-material.module';

@NgModule({
  declarations: [ResumeComponent],
  imports: [
    AppMaterialModule,
    CommonModule,
    ResumeRoutingModule
  ]
})
export class ResumeModule { }
