import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ConfirmationService } from 'primeng/api';

import { SendHSMForWhatsAppDTO, SendHSMForWhatsAppAux, SendHSMToCode7, SendHSMToFlex, ReturnDTO, ReturnToFlexApi } from 'src/app/core/util/model';
import { ErrorHandlerService } from 'src/app/core/util/error-handler.service';
import { MessagesService } from 'src/app/shared/components/messages/messages.service';
import { SpinnerService } from 'src/app/shared/components/spinner/spinner.service';
import { SendMessageWhatsAppService } from '../send-message-whats-app.service';
import { NavbarService } from 'src/app/shared/components/navbar/navbar.service';

@Component({
  selector: 'app-send-hsm-whats-app',
  templateUrl: './send-hsm-whats-app.component.html',
  styleUrls: ['./send-hsm-whats-app.component.css']
})
export class SendHsmWhatsAppComponent implements OnInit {

  public entity = new SendHSMForWhatsAppDTO();
  public listProvidersHsm: any[] = [];
  public listEntityAux: any[] = [];
  public displayReturnFlexApi: boolean = false;
  public listReturnToFlexApi: ReturnToFlexApi[] = [];

  constructor(
    private errorHandlerService: ErrorHandlerService,
    private messagesService: MessagesService,
    private spinnerService: SpinnerService,
    private sendMessageWhatsAppService: SendMessageWhatsAppService,
    private confirmationService: ConfirmationService,
    private navbarService: NavbarService,
  ) {
    this.listProvidersHsm = [
      { name: 'Flex', value: true, icon: '' },
      { name: 'Code7', value: false, icon: '' },
    ]
  }

  ngOnInit(): void {
    this.setQtdVar();
    this.setEntityDefaultToCode7();
  }

  public sendHSMForWhatsApp(form: NgForm) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja enviar HSM?',
      accept: () => {
        this.entity.number = this.formatNumber(this.entity.number);
        this.entity.deComplementFields = this.formatDeComplementFields(this.listEntityAux);
        if (this.entity.isProviderToFlex) {
          this.sendHsmToFlex();
        } else {
          this.sendHsmToCode7();
        }
      },
      reject: () => {
        this.messagesService.showWarn("Ação cancelada!");
      }
    });
  }

  public removeEntityAuxInList(index: number) {
    if (this.listEntityAux.length > 1) {
      this.listEntityAux.splice(index, 1);
    }
  }

  public addEntityAuxInList() {
    if (this.listEntityAux.length < 10) {
      this.listEntityAux.push(new SendHSMForWhatsAppAux());
    } else {
      this.messagesService.showWarn("Limite máximo de variáveis é 10!");
    }
  }

  public cleanFormSendHSMForWhatsApp(f: NgForm) {
    f.resetForm();
    this.entity = new SendHSMForWhatsAppDTO();
    this.cleanEntityAuxOfIndex(0, false);
    this.setEntityDefaultToCode7();
  }

  public converObjectToFlex(pEntity: SendHSMForWhatsAppDTO) {
    let entity = new SendHSMToFlex();

    entity.telephone = pEntity.number;
    entity.codNameSpace = pEntity.codNameSpace;
    entity.codCampaign = pEntity.codCampaign;
    entity.deComplementFields = pEntity.deComplementFields;
    entity.chatSessionId = "";

    return entity;
  }

  public sendHsmToFlex() {
    this.spinnerService.openSpinner();
    let objectSend = this.converObjectToFlex(this.entity);
    this.sendMessageWhatsAppService.SendHsmToFlex(objectSend)
      .then((response: ReturnDTO) => {
        this.messagesService.showSuccess("HSM Enviado com sucesso!");
        this.spinnerService.closeSpinner();
      })
      .catch(erro => {
        if (erro.error != null && erro.error.objectResult != null) {
          this.navbarService.closeSideBar();
          this.listReturnToFlexApi = erro.error.objectResult;
          this.displayReturnFlexApi = true;
        } else {
          this.errorHandlerService.handle(erro);
        }

        console.log(erro);
        this.spinnerService.closeSpinner();
      });
  }

  public sendHsmToCode7() {
    this.spinnerService.openSpinner();
    let objectSend = this.converObjectToCode7(this.entity);
    this.sendMessageWhatsAppService.SendHsmToCode7(objectSend)
      .then((response: ReturnDTO) => {
        this.messagesService.showSuccess("HSM Enviado com sucesso!");
        this.spinnerService.closeSpinner();
      })
      .catch(erro => {
        console.log(erro);
        this.errorHandlerService.handle(erro);
        this.spinnerService.closeSpinner();
      });
  }

  public converObjectToCode7(pEntity: SendHSMForWhatsAppDTO) {
    let entity = new SendHSMToCode7();

    entity.deUrlAPI = pEntity.deUrlAPI;
    entity.number = pEntity.number;
    entity.codNameSpace = pEntity.codNameSpace;
    entity.codCampaign = pEntity.codCampaign;
    entity.deComplementFields = pEntity.deComplementFields;
    entity.imageFilePath = "";

    return entity;
  }

  public setEntityDefaultToCode7() {
    this.entity.deUrlAPI = "http://172.30.0.22/Ayty/AppExternal/Ayty/AppCODE7/FlexOmniWhatsApp01";
    this.entity.codCampaign = "2514";
    this.entity.codNameSpace = "701";
  }

  public setEntityDefaultToFlex() {
    this.entity.deUrlAPI = "https://apiwp.code7.com/Messaging";
    this.entity.codCampaign = "2514";
    this.entity.codNameSpace = "701";
  }

  public setQtdVar() {
    for (let i = 0; i < 2; i++) {
      this.listEntityAux.push(new SendHSMForWhatsAppAux());
    }
  }

  public cleanEntityAuxOfIndex(index: number, hasVar: boolean) {
    if (!hasVar) {
      for (let i = index; i < this.listEntityAux.length; i++) {
        this.listEntityAux[i].deVar = '';
        this.listEntityAux[i].hasVar = false;
      }
    }
  }

  public onChangeProviderHsm() {
    if (this.entity.isProviderToFlex) {
      this.setEntityDefaultToFlex();
    } else {
      this.setEntityDefaultToCode7();
    }
  }

  public formatDeComplementFields(listDeComplementFields: any[]) {
    let deComplementFields: string = '';
    for (let i = 0; i < listDeComplementFields.length; i++) {
      if (listDeComplementFields[i].hasVar) {
        deComplementFields += listDeComplementFields[i].deVar + ';';
      }
    }
    return deComplementFields.substring(0, deComplementFields.length - 1);
  }

  public formatNumber(number: string) {
    return number.replace('(', '').replace(')', '').replace('-', '').replace(' ', '');
  }
}
