import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  loginService: LoginService;
  menuService: MenuService;
  currentStep = 0;

  constructor( private router: Router, loginService: LoginService, menuService: MenuService ) {
    this.loginService = loginService;
    this.menuService = menuService;
    if ( !this.loginService.isLogged() ) {
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
  }

}
