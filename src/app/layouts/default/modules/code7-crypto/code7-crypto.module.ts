import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';

import { ErrorHandlerService } from 'src/app/core/util/error-handler.service';
import { MessagesService } from 'src/app/shared/components/messages/messages.service';
import { SpinnerService } from 'src/app/shared/components/spinner/spinner.service';
import { Code7CryptoService } from './code7-crypto.service';
import { Code7CryptoComponent } from './code7-crypto.component';

@NgModule({
  declarations: [
    Code7CryptoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,  
    FormsModule,
    RouterModule,
    
    MatIconModule,
    MatButtonModule,
    
    InputTextareaModule,
    ButtonModule,
    AccordionModule,
  ],
  providers:[
    ErrorHandlerService,
    MessagesService,    
    SpinnerService,
    Code7CryptoService
  ]
})
export class Code7CryptoModule { }
