import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-greyhound-card',
  templateUrl: './greyhound-card.component.html',
  styleUrls: ['./greyhound-card.component.scss']
})
export class GreyhoundCardComponent implements OnInit {

  @Input() name: string;
  @Input() born: string;
  @Input() passed: string;
  @Input() image: string;
  @Input() descriptions: string[];

  ngOnInit() {
  }

  like(): void {
    console.log('Liking ', this.name);
  }

  share(): void {
    console.log('Sharing ', this.name);
  }

}
