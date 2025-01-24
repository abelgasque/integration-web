import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { TableModule } from 'primeng/table';

import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardCode7Component } from './dashboard-code7.component';
import { DashboardCode7ProjectsComponent } from './dashboard-code7-projects/dashboard-code7-projects.component';

@NgModule({
  declarations: [
    DashboardCode7Component,
    DashboardCode7ProjectsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    
    MatTabsModule,
    MatCardModule,

    TableModule,
    
    SharedModule,
  ]
})
export class DashboardCode7Module { }
