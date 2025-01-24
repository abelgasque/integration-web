import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';

import { ConfirmationService } from 'primeng/api';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';

import { SharedModule } from 'src/app/shared/shared.module';
import { SendMessageWhatsAppService } from './send-message-whats-app.service';
import { AuthService } from 'src/app/core/auth/auth.service';
import { ErrorHandlerService } from 'src/app/core/util/error-handler.service';
import { MessagesService } from 'src/app/shared/components/messages/messages.service';
import { SpinnerService } from 'src/app/shared/components/spinner/spinner.service';
import { NavbarService } from 'src/app/shared/components/navbar/navbar.service';
import { SendMessageWhatsAppComponent } from './send-message-whats-app.component';
import { SendHsmWhatsAppComponent } from './send-hsm-whats-app/send-hsm-whats-app.component';

@NgModule({
  declarations: [
    SendMessageWhatsAppComponent,    
    SendHsmWhatsAppComponent,
  ],
  imports: [
    CommonModule,  
    HttpClientModule,  
    FormsModule,
    RouterModule,

    MatIconModule,
    
    KeyFilterModule,
    InputTextModule,
    InputMaskModule,
    CheckboxModule,
    SelectButtonModule,
    TableModule,
    PanelModule,
    TooltipModule,
    ButtonModule,
    DialogModule,
    TabViewModule,
    
    SharedModule
  ],
  providers:[
    ConfirmationService,

    SendMessageWhatsAppService,
    AuthService,
    ErrorHandlerService,
    MessagesService,
    SpinnerService,
    NavbarService,
  ]
})
export class SendMessageWhatsAppModule { }
