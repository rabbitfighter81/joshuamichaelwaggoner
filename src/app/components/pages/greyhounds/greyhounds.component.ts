import { Component, OnInit } from '@angular/core';
import { Greyhound } from '../../../core/models/greyhound.model';

@Component({
  selector: 'app-greyhounds',
  templateUrl: './greyhounds.component.html',
  styleUrls: ['./greyhounds.component.scss']
})
export class GreyhoundsComponent implements OnInit {

  greyhounds: Greyhound[] = [
    {
      name: 'Redd Walker',
      bornOn: 'Oct 23, 2000',
      passedOn: 'Feb 8, 2012',
      image: 'redd-walker.png'
    } as Greyhound,
    {
      name: 'Poco Gabby',
      bornOn: 'Mar 1, 2005',
      passedOn: 'Apr 2, 2018',
      image: 'poco-gabby.png'
    } as Greyhound,
    {
      name: 'Raven',
      bornOn: 'January 18, 2015',
      passedOn: 'Present',
      image: 'raven.png'
    } as Greyhound,
  ];

  constructor() { }

  ngOnInit() {
  }

}
