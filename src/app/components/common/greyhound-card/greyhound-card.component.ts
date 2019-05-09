import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Greyhound } from '../../../core/models/greyhound.model';

@Component({
  selector: 'app-greyhound-card',
  templateUrl: './greyhound-card.component.html',
  styleUrls: ['./greyhound-card.component.scss'],
})
export class GreyhoundCardComponent implements OnInit {
  @Input() public greyhound: Greyhound;

  constructor(private router: Router) {}

  ngOnInit() {}

  like(): void {
    console.log('Liking ', this.greyhound.name);
  }

  share(): void {
    console.log('Sharing ', this.greyhound.name);
  }

  setGreyhoundDetail(route: string): void {
    this.router.navigate(['/greyhounds', route]);
  }
}
