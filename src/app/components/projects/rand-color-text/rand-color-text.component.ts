import { Component, OnInit } from '@angular/core';
import { GITHUB_RANDOM_COLOR_TEXT_PROJECT_URL } from './../../../app.constants';

@Component({
  selector: 'app-rand-color-text',
  templateUrl: './rand-color-text.component.html',
  styleUrls: ['./rand-color-text.component.scss']
})
export class RandColorTextComponent implements OnInit {

  txt = 'A dreamer is one who can only find his way by moonlight' +
  ' and his punishment is that he sees the dawn before the rest of the world.';

  author = 'Oscar Wilde';

  constructor() {}

  ngOnInit() {}

  navToGitHubProject(): boolean {
    window.open(
      GITHUB_RANDOM_COLOR_TEXT_PROJECT_URL,
      '_blank' // <- This is what makes it open in a new window.
    );
    return false;
  }

}
