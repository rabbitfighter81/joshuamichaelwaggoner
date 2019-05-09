import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { appRoutes } from './app-routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }), // TODO: RESEARCH
  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
