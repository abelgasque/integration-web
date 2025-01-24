import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeModule } from 'src/app/layouts/default/modules/home/home.module';
import { SendMessageWhatsAppModule } from 'src/app/layouts/default/modules/send-message-whats-app/send-message-whats-app.module';
import { Code7CryptoModule } from 'src/app/layouts/default/modules/code7-crypto/code7-crypto.module';

import { NavbarService } from 'src/app/shared/components/navbar/navbar.service';

import { DefaultComponent } from 'src/app/layouts/default/default.component';

@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
     
    HomeModule,
    SendMessageWhatsAppModule,
    Code7CryptoModule,    
  ],
  providers:[
    NavbarService
  ]
})
export class DefaultModule { }
