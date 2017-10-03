import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { UserData } from '../data/user-data';

@Injectable()
export class LoginService {
  private data: UserData;

  constructor( private router: Router ) { }
  
  login( user: string, password: string ) { 
    this.router.navigate(['menu']); 
  }

}
