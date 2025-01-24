import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardCode7Module } from 'src/app/layouts/dashboard/modules/dashboard-code7/dashboard-code7.module';
import { DashboardSystemModule } from 'src/app/layouts/dashboard/modules/dashboard-system/dashboard-system.module';

import { DashboardComponent } from 'src/app/layouts/dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,    
  ],
  imports: [
    CommonModule,
    RouterModule,

    DashboardCode7Module,
    DashboardSystemModule,
  ]
})
export class DashboardModule { }
