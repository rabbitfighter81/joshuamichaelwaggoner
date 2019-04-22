import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pipeline-container',
  templateUrl: './pipeline-container.component.html',
  styleUrls: ['./pipeline-container.component.scss']
})
export class PipelineContainerComponent implements OnInit {

  @Input() header?: string;
  @Input() headerPinline: string;

  constructor() { }

  ngOnInit() {
  }

}
