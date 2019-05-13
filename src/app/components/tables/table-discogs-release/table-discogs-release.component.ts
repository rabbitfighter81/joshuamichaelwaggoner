import { Component, Input } from '@angular/core';
import { Release } from '../../../core/models/release.model';

@Component({
  selector: 'app-table-discogs-release',
  templateUrl: './table-discogs-release.component.html',
  styleUrls: ['./table-discogs-release.component.scss'],
})
export class TableDiscogsReleaseComponent {
  @Input() public release: Release;
  displayedColumns: string[] = ['position', 'title', 'duration'];

  constructor() {}
}
