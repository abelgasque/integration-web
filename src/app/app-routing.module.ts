import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { CoreComponent } from './core/core.component';

//default module
import { DefaultComponent } from 'src/app/layouts/default/default.component';
import { HomeComponent } from 'src/app/layouts/default/modules/home/home.component';
import { SendMessageWhatsAppComponent } from 'src/app/layouts/default/modules/send-message-whats-app/send-message-whats-app.component';
import { SendHsmWhatsAppComponent } from 'src/app/layouts/default/modules/send-message-whats-app/send-hsm-whats-app/send-hsm-whats-app.component';
import { Code7CryptoComponent } from 'src/app/layouts/default/modules/code7-crypto/code7-crypto.component';

//dashboard module
import { DashboardComponent } from 'src/app/layouts/dashboard/dashboard.component';
import { DashboardCode7Component } from 'src/app/layouts/dashboard/modules/dashboard-code7/dashboard-code7.component';
import { DashboardCode7ProjectsComponent } from 'src/app/layouts/dashboard/modules/dashboard-code7/dashboard-code7-projects/dashboard-code7-projects.component';
import { DashboardSystemComponent } from 'src/app/layouts/dashboard/modules/dashboard-system/dashboard-system.component';

//security module
import { SecurityComponent } from 'src/app/layouts/security/security.component';
import { LoginComponent } from 'src/app/layouts/security/modules/login/login.component';

//shared module
import { PageMaintenanceComponent } from 'src/app/shared/layouts/page-maintenance/page-maintenance.component';
import { PageNotAuthorizedComponent } from 'src/app/shared/layouts/page-not-authorized/page-not-authorized.component';
import { PageNotFoundComponent } from 'src/app/shared/layouts/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      //default module
      {
        path: '', component: DefaultComponent,
        children: [
          { path: '', component: HomeComponent },
          {
            path: 'send-message',
            component: SendMessageWhatsAppComponent,
            children: [
              {
                path: 'hsm',
                component: SendHsmWhatsAppComponent,
                //canActivate: [AuthGuard],
              }
            ]
          },
          {
            path: 'crypto',
            component: Code7CryptoComponent,
            //canActivate: [AuthGuard],
          },
        ]
      },

      //dashboard module
      {
        path: 'dashboard', component: DashboardComponent,
        children: [
          { 
            path: 'code7', 
            component: DashboardCode7Component,
            children: [
              { path: '', component: DashboardCode7ProjectsComponent },
            ]
          },
          { path: 'system', component: DashboardSystemComponent },
        ]
      },

      //security module
      {
        path: 'security', component: SecurityComponent,
        children: [
          { path: 'login', component: LoginComponent },
        ]
      },

      //shared module
      { path: 'page-not-authorized', component: PageNotAuthorizedComponent },
      { path: 'page-not-found', component: PageNotFoundComponent },
      { path: 'page-maintenance', component: PageMaintenanceComponent },

      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: '**', redirectTo: 'page-not-found' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }