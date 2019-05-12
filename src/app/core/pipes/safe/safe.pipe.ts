import { Component, ViewEncapsulation, ViewChild, ElementRef, PipeTransform, Pipe, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    const res = url.replace('/watch', '/embed/');
    const res2 = res.replace('?v=', '');
    return this.sanitizer.bypassSecurityTrustResourceUrl(res2);
  }
}
