import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-project-panel-code7',
  templateUrl: './project-panel-code7.component.html',
  styleUrls: ['./project-panel-code7.component.css']
})
export class ProjectPanelCode7Component implements AfterViewInit {
  
  @Input() hasErrorLoadingData: boolean = false;
  @Input() panelData: any;

  constructor() { }

  ngAfterViewInit(): void {
  }

}
