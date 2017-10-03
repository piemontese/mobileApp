import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  logo: string = "./images/mobileApp.jpg";
  loginService: LoginService;
  
  constructor( private router: Router, loginService: LoginService ) 
  {
    this.loginService = loginService;
  }
  
}
