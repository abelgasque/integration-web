import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-code7-projects',
  templateUrl: './dashboard-code7-projects.component.html',
  styleUrls: ['./dashboard-code7-projects.component.css']
})
export class DashboardCode7ProjectsComponent implements OnInit {

  public listProjects: any[] = [];

  public doughnutChartEntity: ChartEntity;
  public loadingDoughnutChart: boolean = true;
  public doughnutChartData: any;

  public projectPanelEntity: any;
  public loadingProjectPanel: boolean = true;
  public projectPanelData: any;

  constructor() { }

  ngOnInit(): void {
    this.configProjectPanelData();
    this.configDoughnutChart();
    this.configTableProjects();
  }

  private configProjectPanelData() {
    this.projectPanelData = {
      nuTotal: 50,
      nuErros: 50,
      nuAccelerated: 50,
      nuNotAccelerated: 0,
      hasErrorLoadingData: false
    };
    
    setTimeout(() => {
      this.loadingProjectPanel = false;
    }, 1000);
  }

  private configDoughnutChart() {
    this.doughnutChartEntity = new ChartEntity();
    this.doughnutChartEntity.hasErrorLoadingData = false;
    this.doughnutChartEntity.nuPercentage = 65;
    this.doughnutChartEntity.nuRemainderPercentage = 35;
    this.doughnutChartEntity.colorRemainderPercentage = '#f5b8b8';

    this.doughnutChartEntity.colorPercentage = this.calculatedColorDoughnutChart(this.doughnutChartEntity.nuPercentage);

    this.doughnutChartData = {
      labels: [],
      datasets: [
        {
          data: [this.doughnutChartEntity.nuRemainderPercentage, this.doughnutChartEntity.nuPercentage],
          borderWidth: 0,
          backgroundColor: [
            this.doughnutChartEntity.colorRemainderPercentage,
            this.doughnutChartEntity.colorPercentage,
          ],
        },
      ],
    };

    setTimeout(() => {
      this.loadingDoughnutChart = false;
    }, 1000);
  }

  private configTableProjects() {
    for (let i = 0; i < 15; i++) {
      let entity = new ProjectCode7();
      let dtCurrent = new Date();

      entity.nmProject = `Projeto ${(i + 1)}`;
      entity.dtStart = `${dtCurrent.getDay()}/${dtCurrent.getMonth()}/${dtCurrent.getFullYear()}`;
      entity.dtEnd = `${dtCurrent.getDay()}/${dtCurrent.getMonth()}/${dtCurrent.getFullYear()}`;
      entity.dtActive = `${dtCurrent.getDay()}/${dtCurrent.getMonth()}/${dtCurrent.getFullYear()}`;
      entity.nuPercentage = "90";

      this.listProjects.push(entity);
    }
  }

  private calculatedColorDoughnutChart(pNuPercentage: number): string {
    let color: string;

    if (pNuPercentage >= 0 && pNuPercentage <= 30) {
      // vermelho 		0  - 30  -> #dc143c
      color = '#dc143c';
    } else if (pNuPercentage >= 30 && pNuPercentage <= 60) {
      // amarelo  		30 - 60  -> #ffff00
      color = '#ffff00';
    } else if (pNuPercentage >= 60 && pNuPercentage <= 80) {
      // verde claro  	60 - 80  -> #66cc66
      color = '#66cc66';
    } else if (pNuPercentage >= 80 && pNuPercentage <= 100) {
      // verde escuro  	80 - 100 -> #669900
      color = '#669900';
    }

    return color;
  }
}

export class ProjectCode7 {
  nmProject: string;
  dtStart: string;
  dtEnd: string;
  dtActive: string;
  nuPercentage: string;
}

export class ChartEntity {
  nuPercentage: number;
  nuRemainderPercentage: number;
  colorPercentage: string;
  colorRemainderPercentage: string;
  hasErrorLoadingData: boolean;
}