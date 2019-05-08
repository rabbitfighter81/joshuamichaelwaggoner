import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared/shared.module';
import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';

@NgModule({
  declarations: [ResumeComponent],
  imports: [SharedModule, CommonModule, ResumeRoutingModule],
})
export class ResumeModule {}
