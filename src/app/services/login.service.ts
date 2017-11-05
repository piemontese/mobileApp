import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { UserData } from '../models/user-data';
import { IUser } from '../models/user';
import { DialogService } from '../services/dialog.service';

@Injectable()
export class LoginService {
  private data: UserData;
  public user: IUser;
  public logged: boolean = false;
  public users: IUser[] = [
    { user: "user1", password: "dXNlcjE=", firstName: "Antonio", lastName: "Bianchi" , auths: [ "auth1", "auth2", "auth3", "auth4", "auth5"] },
    { user: "user2", password: "dXNlcjI=", firstName: "Matteo", lastName: "Rossi" , auths: [ "auth1", "auth4", "auth5"] },
    { user: "user3", password: "dXNlcjM=", firstName: "Giuseppe", lastName: "Verdi" , auths: [ "auth4", "auth5"] },
  ];

  constructor( private router: Router, private dialogService: DialogService ) { }
  
  login( user: string, password: string ) {
    for ( let i=0; i<this.users.length; i++ ) {
      if ( this.users[i].user === atob(user) && this.users[i].password === password ) {
        this.user = this.users[i];
        this.logged = true;
        this.router.navigate(['menu']); 
        return;
      }  
    }  

    this.dialogService.open( "Login",   // title
                             ["Utente o password errati"],  // array of messages
                             "message",   // dialog type
                             "error",   // message type
                             [
                               { caption: "OK", color: "primary", close: true }
                             ]  // buttons
      );
  }

  logout() {
    this.logged = false;
    this.router.navigate(['login']);     
  }
  
  isLogged() { 
    return this.logged;
  }

}
