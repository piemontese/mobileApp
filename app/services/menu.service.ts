import { Injectable } from '@angular/core';

import { FieldType } from '../models/field-type.enum';
import { MethodField } from '../models/method-field';
import { MenuItem } from '../models/menu-item';
import { MenuAction } from '../models/menu-action';
import { MethodAction } from '../models/method-action';

import { LoginService } from '../services/login.service';
import { DialogService } from '../services/dialog.service';

@Injectable()
export class MenuService {
  fieldType: FieldType;
  parent: string = "";
  menu: MenuItem[] = [
    { parent: "", item: "item_1", description: "Item 1", action: "item_1_1", auth: "auth1", visible: false },
    { parent: "", item: "item_2", description: "Item 2", action: "item_2_1", auth: "auth2", visible: false },
    { parent: "", item: "item_3", description: "Item 3", action: "item_3_1", auth: "auth3", visible: false },
    { parent: "", item: "item_4", description: "Item 4", action: "item_4_1", auth: "auth4", visible: false },
    { parent: "", item: "item_5", description: "Item 5", action: "item_5_1", auth: "auth5", visible: false },
    { parent: "item_1", item: "item_1_1", description: "Item 1 1", action: "item_1_1_1", auth: "auth1", visible: false },
    { parent: "item_1", item: "item_1_2", description: "Item 1 2", action: "item_1_2_1", auth: "auth1", visible: false},
    { parent: "item_1", item: "item_1_3", description: "Item 1 3", action: "item_1_3_1", auth: "auth1", visible: false},
    { parent: "item_2", item: "item_2_1", description: "Item 2 1", action: "item_2_1_1", auth: "auth2", visible: false},
    { parent: "item_1_1", item: "item_1_1_1", description: "Item 1 1 1", action: "item_1_1_1_1", auth: "auth1", visible: false },
  ];
  actions: MenuAction[] = [
    { parent: "item_1_1_1", item: "action_1_1_1", title: "Action 1 1 1", method: "Z_METHOD_1_1_1" },
    { parent: "item_1_2", item: "action_1_2", title: "Action 1 2", method: "Z_METHOD_1_2" },
    { parent: "item_1_3", item: "action_1_3", title: "Action 1 3", method: "Z_METHOD_1_3" },
    { parent: "item_2_1", item: "action_2_1", title: "Action 2 1", method: "Z_METHOD_2_1" },
    { parent: "item_3", item: "action_3", title: "Action 3", method: "Z_METHOD_3" },
    { parent: "item_4", item: "action_4", title: "Action 4", method: "Z_METHOD_4" },
    { parent: "item_5", item: "action_5", title: "Action 5", method: "Z_METHOD_5" },
  ];
  methods: MethodAction[] = [
    { method: "Z_METHOD_1_1_1", fields: [
        { field: "plant", description: "Plant", type: FieldType.select, obligatory: true, value: "1000", length: 4, data: [ "1000", "2000", "3000"], minWidth: "0", maxWidth: "4", step: 1 },
        { field: "storageLoc", description: "Storage location", type: FieldType.select, obligatory: true, value: "1000", length: 4, data: [ "1000 - Roma", "2000 - Milano", "3000 - Napoli", "4000 - Bologna"], minWidth: "0", maxWidth: "4", step: 1 },
      ], 
//      steps: [{ step: "1" }],
      steps: [ "1" ],
    },
    { method: "Z_METHOD_3", fields: [
        { field: "material", description: "Material", type: FieldType.textbox, obligatory: true, value: "100-002", length: 18, data: null, minWidth: "0", maxWidth: "18", step: 1 },
        { field: "plant", description: "Plant", type: FieldType.select, obligatory: true, value: "1000", length: 4, data: [ "1000", "2000", "3000"], minWidth: "0", maxWidth: "4", step: 1 },
        { field: "storageLoc", description: "Storage location", type: FieldType.select, obligatory: true, value: "", length: 4, data: [ "1001", "1002", "1003"], minWidth: "0", maxWidth: "4", step: 2 },
        { field: "date", description: "Date", type: FieldType.datepicker, obligatory: true, value: "", length: 4, data: null, minWidth: "0", maxWidth: "10", step: 2 },
        { field: "note", description: "Note", type: FieldType.textarea, obligatory: false, value: "", length: 200, data: null, minWidth: "0", maxWidth: "1000", step: 3 },
      ], 
//      steps: [{ step: "1" }, { step: "2" }, { step: "3" }],
      steps: [ "1", "2", "3" ],
    },
    { method: "Z_METHOD_4", fields: [
        { field: "material", description: "Material", type: FieldType.textbox, obligatory: true, value: "100-001", length: 18, data: null, minWidth: "0", maxWidth: "18", step: 1 },
      ], 
//      steps: [{ step: "1" }],
      steps: [ "1" ],
    },
  ];
  currentItem: MenuItem = null;
  currentAction: MenuAction = null;
  currentMethod: MethodAction = null;
  currentSteps: number = 0;
  loginService: LoginService;

  constructor( loginService: LoginService, private dialogService: DialogService ) { 
    this.loginService = loginService;
  }
  
  getCurrentMenu() : Array<any> {
    let res = [];
    for( let i = 0; i < this.menu.length; i++ ) { 
      if ( this.menu[i].parent === this.parent ) {
        for ( let j=0; j<this.loginService.user.auths.length; j++ ) {
          if ( this.menu[i].auth === this.loginService.user.auths[j] ) {
            res.push( this.menu[i] );
            break;
          }
        }
      }
    }
    this.getCurrentAction();
    this.getCurrentMehod();
    return res;
  }
  
  goToNextMenu( currItem: MenuItem ) { 
    this.parent = currItem.item; 
    this.currentItem = currItem;
    this.getCurrentMenu();
  }

  getCurrentAction() { 
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

  getCurrentMehod() { 
    this.currentMethod = null;
    this.currentSteps = 0;
    if ( this.currentAction ) { 
      for( let i = 0; i < this.methods.length; i++ ) { 
        if ( this.currentAction.method === this.methods[i].method ) { 
          this.currentMethod = this.methods[i];
          for( let i = 0; i < this.currentMethod.steps.length; i++ )
            this.currentSteps++;
          break;
        }
      }
    }
  }

  goToPrevMenu() { 
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

  execAction() { 
    this.dialogService.open( "Azione " + this.currentAction.title, // title
                             "Eseguito metodo " + this.currentAction.method,  // message
                             "message",   // dialog type
                             "info",   // message type
                             [
//                               { caption: "Cancel", color: "", close: false },
                               { caption: "OK", color: "primary", close: true }
                             ]  // buttons 
    );
    this.goToPrevMenu();
  }

}
