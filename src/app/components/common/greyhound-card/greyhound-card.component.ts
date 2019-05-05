import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-greyhound-card',
  templateUrl: './greyhound-card.component.html',
  styleUrls: ['./greyhound-card.component.scss']
})
export class GreyhoundCardComponent implements OnInit {

  @Input() public name: string;
  @Input() public route: string;
  @Input() public born: string;
  @Input() public passed: string;
  @Input() public image: string;
  @Input() public descriptions: string[];

  constructor(private router: Router) {}

  ngOnInit() {
  }

  like(): void {
    console.log('Liking ', this.name);
  }

  share(): void {
    console.log('Sharing ', this.name);
  }

  setGreyhoundDetail(route: string): void {
    this.router.navigate(['/greyhounds', route]);
  }

}
