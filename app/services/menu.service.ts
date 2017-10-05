import { Injectable } from '@angular/core';

interface MenuItem { 
  parent: string;
  item: string;
  description: string;
  action: string;
  visible: boolean;
};

@Injectable()
export class MenuService {
  parent: string = "";
  menu: MenuItem[] = [
    { parent: "", item: "item_1", description:"Item 1", action: "item_1_1", visible: true },
    { parent: "", item: "item_2", description:"Item 2", action: "item_2_1", visible: true },
    { parent: "", item: "item_3", description:"Item 3", action: "item_3_1", visible: true },
    { parent: "", item: "item_4", description:"Item 4", action: "item_4_1", visible: true },
    { parent: "", item: "item_5", description:"Item 5", action: "item_5_1", visible: true },
    { parent: "item_1", item: "item_1_1", description:"Item 1 1", action: "item_1_1_1", visible: false },
    { parent: "item_1", item: "item_1_2", description:"Item 1 2", action: "item_1_2_1", visible: false},
    { parent: "item_1", item: "item_1_3", description:"Item 1 3", action: "item_1_3_1", visible: false},
    { parent: "item_2", item: "item_2_1", description:"Item 2 1", action: "item_2_1_1", visible: false},
    { parent: "item_1_1", item: "item_1_1_1", description:"Item 1 1 1", action: "item_1_1_1_1", visible: false },
  ];
  currentItem: MenuItem;
  
  constructor() { }
  
  getCurrentMenu() : Array<any>
  {
    let res = [];
    for( let i = 0; i < this.menu.length; i++ ) { 
      if ( this.menu[i].parent === this.parent )
        res.push( this.menu[i] );
    }
    return res;
  }
  
  goToNextMenu( currItem: MenuItem ) 
  { 
    this.parent = currItem.item; 
    this.currentItem = currItem;
    this.getCurrentMenu();
  }

  goToPrevtMenu() 
  { 
    for( let i = 0; i < this.menu.length; i++ ) { 
      if ( this.menu[i].item === this.parent ) {  
        this.parent = this.menu[i].parent;
        for( let j = 0; j < this.menu.length; j++ ) { 
          if ( this.menu[j].item === this.menu[i].parent ) {  
            this.currentItem = this.menu[j];
            break;
          }
        }
        break;
      }
    }
    this.getCurrentMenu();
  }

}
