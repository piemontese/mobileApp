import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuService: MenuService;
  currentStep: number = 0;

  constructor( menuService: MenuService ) {
    this.menuService = menuService;
  }

  ngOnInit() {
  }

}
