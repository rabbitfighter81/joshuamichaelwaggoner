import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { CoreModule } from './core/core.module';
import { AppComponentsModule } from './core/modules/app-components/app-components.module';
import { AppMaterialModule } from './core/modules/app-material/app-material.module';
import { SafePipe } from './core/pipes/safe/safe.pipe';

@NgModule({
  imports: [
    CoreModule,
    AppComponentsModule,
    AppRoutingModule,
    AppMaterialModule,
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class AppModule {}
