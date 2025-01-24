import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Code7CryptoEntity } from 'src/app/core/util/model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Code7CryptoService {

  baseUrl: string;

  constructor(private http: HttpClient) { 
    this.baseUrl =`${environment.urlApi}/Code7Crypto`;
  }

  public Encrypt(entity: Code7CryptoEntity): Promise<any> {
    return this.http.post<Code7CryptoEntity>(`${this.baseUrl}/Encrypt`, entity)
    .toPromise()
    .then(response => response);
  }

  public Decrypt(entity: Code7CryptoEntity): Promise<any> {
    return this.http.post<Code7CryptoEntity>(`${this.baseUrl}/Decrypt`, entity)
    .toPromise()
    .then(response => response);
  }
}
