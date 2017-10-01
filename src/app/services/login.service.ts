import { Injectable } from '@angular/core';

import { UserData } from '../data/user-data';

@Injectable()
export class LoginService {
  private data: UserData;

  constructor() { }
  
  login( user: string, password: string ) { 
    alert("login");
  }

}
