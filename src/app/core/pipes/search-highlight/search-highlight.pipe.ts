import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'searchHighlight' })
export class SearchHighlightPipe implements PipeTransform {
  constructor(private sanitizer?: DomSanitizer) {}
  transform(value: any, args: any): any {
    /*tslint:disable*/
    return args !== ''
      ? value.replace(
          new RegExp(args, 'gi'),
          match => '<mark>' + match + '</mark>',
        )
      : value;
    /*tslint:enable*/
  }
}
