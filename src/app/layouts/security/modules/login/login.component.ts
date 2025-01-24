import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from 'src/app/core/util/model';
import { ErrorHandlerService } from 'src/app/core/util/error-handler.service';
import { MessagesService } from 'src/app/shared/components/messages/messages.service';
import { SpinnerService } from 'src/app/shared/components/spinner/spinner.service';
import { SecurityService } from 'src/app/layouts/security/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public entity = new User();

  constructor(
    private router: Router,
    private securityService: SecurityService,
    private errorHandlerService: ErrorHandlerService,
    private spinnerService: SpinnerService,
    private messagesService: MessagesService,
  ) { }

  ngOnInit(): void {
  }

  public login(f: NgForm){
    if((this.entity.userName.length <= 0) || (this.entity.password.length <= 0)){
      this.messagesService.showWarn("Preencha o formulário corretamente!");
    }else{
      this.spinnerService.openSpinner();
      this.securityService.TokenAuthenticate(this.entity)
      .then((response: User) => {
        this.router.navigate(['']);
        this.spinnerService.closeSpinner();
      })
      .catch(error => {
        console.log(error);
        this.errorHandlerService.handle(error);
        this.spinnerService.closeSpinner();
      });
    }
  }
}
