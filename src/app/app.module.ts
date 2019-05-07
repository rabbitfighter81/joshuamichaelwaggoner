import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { AppComponentsModule } from './core/modules/app-components/app-components.module';
import { CoreModule } from './core/core.module';
import { AppMaterialModule } from './core/modules/app-material/app-material.module';
import { NavModule } from './components/nav/nav.module';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';

@NgModule({
  imports: [
    CoreModule,
    NavModule,
    HeaderModule,
    FooterModule,
    AppRoutingModule,
    AppMaterialModule,
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class AppModule {}
