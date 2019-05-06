import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { SharedModule } from '../../../core/modules/shared/shared.module';

@NgModule({
  declarations: [ResumeComponent],
  imports: [SharedModule, CommonModule, ResumeRoutingModule],
})
export class ResumeModule {}
