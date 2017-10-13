import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { UserData } from '../data/user-data';
import { DialogService } from '../services/dialog.service';

@Injectable()
export class LoginService {
  private data: UserData;
  public logged: boolean = false;

  constructor( private router: Router, private dialogService: DialogService ) { }
  
  login( user: string, password: string ) { 
    if ( atob(user) === "errato" ) {
      this.dialogService.open( "Login", "Utente o password errati", "info" );
      return;
    }
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
