import { Component, Input, AfterViewInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-chart-doughnut-percentage',
  templateUrl: './chart-doughnut-percentage.component.html',
  styleUrls: ['./chart-doughnut-percentage.component.css']
})
export class ChartDoughnutPercentageComponent implements AfterViewInit {

  @Input() hasErrorLoadingData: boolean = false;
  @Input() chartData: ChartData<'doughnut'>;

  public chartOptions = { 
    responsive: true,       
    hover: {mode: null},
    events: []
  }

  public chartPlugins = [];
  public chartType: ChartType = 'doughnut';

  constructor() { }

  ngAfterViewInit(): void { }
}
