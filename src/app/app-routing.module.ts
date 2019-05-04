import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { appRoutes } from './app-routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
