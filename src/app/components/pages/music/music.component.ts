import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DiscogsService } from 'src/app/core/services/discogs/discogs.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit, AfterViewInit {

  constructor(private disogsService: DiscogsService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.disogsService.callGetRecords();
  }

}
