import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as screenfull from 'screenfull';

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
  
  fullscreen() {
    debugger;
//    let docElm = document.documentElement;
//    docElm.webkitRequestFullscreen();
    screenfull.toggle();
//    screenfull.request();
  }
  
  ngOnInit() {
//    debugger;
//    let docElm = document.documentElement;
//    docElm.webkitRequestFullscreen();
//    screenfull.toggle();
//    screenfull.request();
  }
  
}
