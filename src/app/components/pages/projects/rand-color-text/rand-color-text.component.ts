import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ProjectBaseComponent } from '../base/project-base.component';

@Component({
  selector: 'app-rand-color-text',
  templateUrl: './rand-color-text.component.html',
  styleUrls: ['./rand-color-text.component.scss'],
})
export class RandColorTextComponent extends ProjectBaseComponent
  implements OnInit {
  txt =
    'A dreamer is one who can only find his way by moonlight' +
    ' and his punishment is that he sees the dawn before the rest of the world.';

  author = 'Oscar Wilde';
  constructor(public snackbar: MatSnackBar) {
    super(snackbar);
  }

  ngOnInit() {}
}
