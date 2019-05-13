import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url: string) {
    const swappedUrl = url.replace('/watch', '/embed/').replace('?v=', '');
    return this.sanitizer.bypassSecurityTrustResourceUrl(swappedUrl);
  }
}
