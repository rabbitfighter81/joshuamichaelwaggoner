import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DiscogsService } from './services/discogs/discogs.service';
import { GreyhoundService } from './services/greyhound/greyhound.service';
import { LoggingService } from './services/logging/logging.service';

const modules = [BrowserAnimationsModule];

const services = [GreyhoundService, LoggingService, DiscogsService];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...modules],
  exports: [...modules],
  providers: [...services],
})
export class CoreModule {}
