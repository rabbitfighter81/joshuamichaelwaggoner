import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-snackbar-coming-soon',
  templateUrl: './snackbar-coming-soon.component.html',
  styleUrls: ['./snackbar-coming-soon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SnackbarComingSoonComponent implements OnInit {

  data: any;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public incoming: string) {
    this.data = incoming;
  }

  ngOnInit() { }

}
