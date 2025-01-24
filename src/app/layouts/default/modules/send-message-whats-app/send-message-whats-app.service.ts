import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SendHSMToFlex, SendHSMToCode7 } from 'src/app/core/util/model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SendMessageWhatsAppService {

  baseUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl =`${environment.urlApi}/SendMessageWhatsApp`;
  }

  public SendHsmToCode7(entity: SendHSMToCode7): Promise<any> {
    return this.http.post<SendHSMToCode7>(`${this.baseUrl}/SendMessageToCode7Api`, entity)
    .toPromise()
    .then(response => response);
  }

  public SendHsmToFlex(entity: SendHSMToFlex): Promise<any> {
    return this.http.post<SendHSMToFlex>(`${this.baseUrl}/SendMessageToFlexApi`, entity)
    .toPromise()
    .then(response => response);
  }
}
