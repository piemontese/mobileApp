import { Injectable } from '@angular/core';

interface MenuItem { 
  parent: string;
  item: string;
  description: string;
  action: string;
  visible: boolean;
};

interface MenuAction { 
  parent: string;
  item: string;
  description: string;
  method: string;
};

@Injectable()
export class MenuService {
  parent: string = "";
  menu: MenuItem[] = [
    { parent: "", item: "item_1", description: "Item 1", action: "item_1_1", visible: false },
    { parent: "", item: "item_2", description: "Item 2", action: "item_2_1", visible: false },
    { parent: "", item: "item_3", description: "Item 3", action: "item_3_1", visible: false },
    { parent: "", item: "item_4", description: "Item 4", action: "item_4_1", visible: false },
    { parent: "", item: "item_5", description: "Item 5", action: "item_5_1", visible: false },
    { parent: "item_1", item: "item_1_1", description: "Item 1 1", action: "item_1_1_1", visible: false },
    { parent: "item_1", item: "item_1_2", description: "Item 1 2", action: "item_1_2_1", visible: false},
    { parent: "item_1", item: "item_1_3", description: "Item 1 3", action: "item_1_3_1", visible: false},
    { parent: "item_2", item: "item_2_1", description: "Item 2 1", action: "item_2_1_1", visible: false},
    { parent: "item_1_1", item: "item_1_1_1", description: "Item 1 1 1", action: "item_1_1_1_1", visible: false },
  ];
  actions: MenuAction[] = [
    { parent: "item_1_1_1", item: "action_1_1_1", description: "Action 1 1 1", method: "Z_METHOD_1_1_1" },
    { parent: "item_1_2", item: "action_1_2", description: "Action 1 2", method: "Z_METHOD_1_2" },
    { parent: "item_1_3", item: "action_1_3", description: "Action 1 3", method: "Z_METHOD_1_3" },
    { parent: "item_2_1", item: "action_2_1", description: "Action 2 1", method: "Z_METHOD_2_1" },
    { parent: "item_3", item: "action_3", description: "Action 3", method: "Z_METHOD_3" },
    { parent: "item_4", item: "action_4", description: "Action 4", method: "Z_METHOD_4" },
    { parent: "item_5", item: "action_5", description: "Action 5", method: "Z_METHOD_5" },
  ];
  currentItem: MenuItem = null;
  currentAction: MenuAction = null;
  
  constructor() { }
  
  getCurrentMenu() : Array<any>
  {
    let res = [];
    for( let i = 0; i < this.menu.length; i++ ) { 
      if ( this.menu[i].parent === this.parent )
        res.push( this.menu[i] );
    }
    this.getAction();
    return res;
  }
  
  goToNextMenu( currItem: MenuItem ) 
  { 
    this.parent = currItem.item; 
    this.currentItem = currItem;
    this.getCurrentMenu();
  }

  getAction()
  { 
    this.currentAction = null;
    if ( this.currentItem ) { 
      for( let i = 0; i < this.actions.length; i++ ) { 
        if ( this.currentItem.item === this.actions[i].parent ) { 
          this.currentAction = this.actions[i];
          break;
        }
      }
    }
  }

  goToPrevMenu() 
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
