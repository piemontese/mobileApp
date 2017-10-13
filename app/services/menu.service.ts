import { Injectable } from '@angular/core';

import { FieldType } from '../data/field-type.enum';
import { MethodField } from '../data/method-field';
import { DialogService } from '../services/dialog.service';

export interface MenuItem { 
  parent: string;
  item: string;
  description: string;
  action: string;
  visible: boolean;
};

export interface MenuAction { 
  parent: string;
  item: string;
  title: string;
  method: string;
};

export interface Steps {
  step: string;
};
  
export interface MethodAction { 
  method: string;
  fields: MethodField[];
  steps: Steps[]; //per mat-stepper
};

@Injectable()
export class MenuService {
  fieldType: FieldType;
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
        { field: "plant", description: "Plant", type: FieldType.select, obligatory: true, value: "1000", length: 4, data: [ "1000", "2000", "3000"], minWidth: 0, maxWidth: 4, step: 1 },
        { field: "storageLoc", description: "Storage location", type: FieldType.select, obligatory: true, value: "1000", length: 4, data: [ "1000 - Roma", "2000 - Milano", "3000 - Napoli", "4000 - Bologna"], minWidth: 0, maxWidth: 4, step: 1 },
      ], 
      steps: [{ step: "1" }],
    },
    { method: "Z_METHOD_3", fields: [
        { field: "material", description: "Material", type: FieldType.textbox, obligatory: true, value: "100-001", length: 18, data: null, minWidth: 0, maxWidth: 18, step: 1 },
        { field: "plant", description: "Plant", type: FieldType.select, obligatory: true, value: "1000", length: 4, data: [ "1000", "2000", "3000"], minWidth: 0, maxWidth: 4, step: 1 },
        { field: "note", description: "Note", type: FieldType.textarea, obligatory: false, value: "", length: 200, data: null, minWidth: 0, maxWidth: 1000, step: 2 },
      ], 
      steps: [{ step: "1" }, { step: "2" }],
    },
    { method: "Z_METHOD_4", fields: [
        { field: "material", description: "Material", type: FieldType.textbox, obligatory: true, value: "100-001", length: 18, data: null, minWidth: 0, maxWidth: 18, step: 1 },
      ], 
      steps: [{ step: "1" }],
    },
  ];
  currentItem: MenuItem = null;
  currentAction: MenuAction = null;
  currentMethod: MethodAction = null;
  currentSteps: number = 0;

  constructor( private dialogService: DialogService ) { }
  
  getCurrentMenu() : Array<any> {
    let res = [];
    for( let i = 0; i < this.menu.length; i++ ) { 
      if ( this.menu[i].parent === this.parent )
        res.push( this.menu[i] );
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
    this.dialogService.open( "Azione " + this.currentAction.title, "Eseguito metodo " + this.currentAction.method, "info" );
    this.goToPrevMenu();
  }

}
