import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { User } from 'src/app/core/util/model';
import { NavbarService } from 'src/app/shared/components/navbar/navbar.service';
import { AuthService } from 'src/app/core/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  
  baseUrl: string;

  constructor(   
    private router: Router,
    private http: HttpClient,
    private authService: AuthService,
    private navbarService: NavbarService
  ) {    
    this.baseUrl =`${environment.urlApi}/Token`; 
  }

  public TokenAuthenticate(entidade: User): Promise<any> {
    return this.http.post<User>(`${this.baseUrl}/Authenticate`, entidade)
    .toPromise()
    .then(response => {      
        this.authService.hasUserAuth = true;
        this.authService.setToken(response.token);
        this.authService.setUser(response);
    });
  }

  public Loggout(){
    this.authService.hasUserAuth = false;
    this.authService.setUser(null);
    this.authService.setToken(null);    
    this.navbarService.closeSideBar();
    this.router.navigate(['']);    
  }
}
