import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from 'src/app/core/modules/app-material/app-material.module';
import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';

@NgModule({
  declarations: [ ResumeComponent ],
  imports: [
    AppMaterialModule,
    CommonModule,
    ResumeRoutingModule
  ]
})
export class ResumeModule { }
