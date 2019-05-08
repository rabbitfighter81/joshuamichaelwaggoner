import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../../../core/modules/app-material/app-material.module';
import { MusicRoutingModule } from './music-routing.module';
import { MusicComponent } from './music.component';

@NgModule({
  imports: [
    AppMaterialModule,
    CommonModule,
    MusicRoutingModule
  ],
  declarations: [MusicComponent],
})
export class MusicModule { }


