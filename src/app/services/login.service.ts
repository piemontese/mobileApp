import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { UserData } from '../data/user-data';

@Injectable()
export class LoginService {
  private data: UserData;
  public logged: boolean = false;

  constructor( private router: Router ) { }
  
  login( user: string, password: string ) { 
    this.logged = true;
    this.router.navigate(['menu']); 
  }

  logout() 
  {
    this.logged = false;
    this.router.navigate(['login']);     
  }
  isLogged() { 
    return this.logged;
  }

}
