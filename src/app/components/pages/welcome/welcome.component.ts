import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  estesImgSrc = 'assets/img/estes.jpg';

  imageSources = [
    'assets/img/rino.jpg',
    'assets/img/st-cajetans.jpg',
    'assets/img/flight.jpg',
    'assets/img/coffee.jpg',
    'assets/img/vail.png',
    'assets/img/estes.jpg',
  ];

  constructor() { }

  ngOnInit() {
  }

}
