import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { AppComponentsModule } from './core/modules/app-components/app-components.module';
import { CoreModule } from './core/core.module';
import { AppMaterialModule } from './core/modules/app-material/app-material.module';
import { GreyhoundCardComponent } from './components/common/greyhound-card/greyhound-card.component';

@NgModule({
  imports: [
    CoreModule,
    AppComponentsModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  entryComponents: [
  ],
  providers: [],
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent, GreyhoundCardComponent ]
})
export class AppModule { }
