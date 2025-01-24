import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ErrorHandlerService } from 'src/app/core/util/error-handler.service';
import { Code7CryptoEntity, ReturnDTO } from 'src/app/core/util/model';
import { MessagesService } from 'src/app/shared/components/messages/messages.service';
import { SpinnerService } from 'src/app/shared/components/spinner/spinner.service';
import { Code7CryptoService } from './code7-crypto.service';

@Component({
  selector: 'app-code7-crypto',
  templateUrl: './code7-crypto.component.html',
  styleUrls: ['./code7-crypto.component.css']
})
export class Code7CryptoComponent implements OnInit {

  public listCryptographers: any[] = [];
  public listOptionsCryptographers: any[] = [];

  constructor(
    private errorHandlerService: ErrorHandlerService,
    private messagesService: MessagesService,    
    private spinnerService: SpinnerService,
    private code7CryptoService: Code7CryptoService,
  ) { 
    this.listOptionsCryptographers = [ 
      { name: 'Descriptografar', value: true, icon: 'lock_open' }, 
      { name: 'Criptografar', value: false, icon: 'lock' } 
    ];
  }

  ngOnInit(): void {
    this.addCryptoInList();
  }

  private encrypt(index: number){    
    this.spinnerService.openSpinner();
    this.code7CryptoService.Encrypt(this.listCryptographers[index])
    .then((response: ReturnDTO) =>{
      this.listCryptographers.splice(index, 1, response.objectResult);
      this.messagesService.showSuccess("Texto criptografado!");      
      this.spinnerService.closeSpinner();
    })  
    .catch(erro => {
      console.log(erro);      
      this.errorHandlerService.handle(erro);      
      this.spinnerService.closeSpinner();
    });
  }

  private decrypt(index: number){
    this.spinnerService.openSpinner();
    this.code7CryptoService.Decrypt(this.listCryptographers[index])
    .then((response: ReturnDTO)  =>{      
      this.listCryptographers.splice(index, 1, response.objectResult);
      this.messagesService.showSuccess("Texto descriptografado!");      
      this.spinnerService.closeSpinner();
    })  
    .catch(erro => {
      console.log(erro);      
      this.errorHandlerService.handle(erro);      
      this.spinnerService.closeSpinner();
    });
    
  }

  public sendCryptography(f: NgForm, index: number){   
    if(this.listCryptographers[index].isDecrypt){
      this.decrypt(index);
    }else{
      this.encrypt(index);
    }
  }

  public cleanCryptography(f: NgForm, index: number){
    f.resetForm();
    this.listCryptographers[index].deCrypto = ''; 
    this.listCryptographers[index].deDecrypt = ''; 
    this.listCryptographers[index].isDecrypt = false; 
  }

  public removeCryptoInList(){
    if(this.listCryptographers.length > 1){
      this.listCryptographers.splice(0, 1);
    }
  } 

  public addCryptoInList(){
    this.listCryptographers.unshift(new Code7CryptoEntity());
  }

  public typeCrypto(value: boolean, index: number){
    this.listCryptographers[index].isDecrypt = value;
  }
}
