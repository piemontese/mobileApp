import { Injectable } from '@angular/core';

import { IFieldType } from '../models/field-type.enum';
import { IMethodField } from '../models/method-field';
import { IMenuItem } from '../models/menu-item';
import { IMenuAction } from '../models/menu-action';
import { IMethodAction } from '../models/method-action';
import { TextboxType } from '../models/textbox-type';

import { LoginService } from '../services/login.service';
import { DialogService } from '../services/dialog.service';

@Injectable()
export class MenuService {
  fieldType: IFieldType;
  parent = '';
  menu: IMenuItem[] = [
    { parent: '', item: 'item_1', description: 'Item 1', action: 'item_1_1', auth: 'auth1', visible: false },
    { parent: '', item: 'item_2', description: 'Item 2', action: 'item_2_1', auth: 'auth2', visible: false },
    { parent: '', item: 'item_3', description: 'Item 3', action: 'item_3_1', auth: 'auth3', visible: false },
    { parent: '', item: 'item_4', description: 'Item 4', action: 'item_4_1', auth: 'auth4', visible: false },
    { parent: '', item: 'item_5', description: 'Item 5', action: 'item_5_1', auth: 'auth5', visible: false },
    { parent: 'item_1', item: 'item_1_1', description: 'Item 1 1', action: 'item_1_1_1', auth: 'auth1', visible: false },
    { parent: 'item_1', item: 'item_1_2', description: 'Item 1 2', action: 'item_1_2_1', auth: 'auth1', visible: false},
    { parent: 'item_1', item: 'item_1_3', description: 'Item 1 3', action: 'item_1_3_1', auth: 'auth1', visible: false},
    { parent: 'item_2', item: 'item_2_1', description: 'Item 2 1', action: 'item_2_1_1', auth: 'auth2', visible: false},
    { parent: 'item_1_1', item: 'item_1_1_1', description: 'Item 1 1 1', action: 'item_1_1_1_1', auth: 'auth1', visible: false },
  ];
  actions: IMenuAction[] = [
    { parent: 'item_1_1_1', item: 'action_1_1_1', title: 'Action 1 1 1', method: 'Z_METHOD_1_1_1' },
    { parent: 'item_1_2', item: 'action_1_2', title: 'Action 1 2', method: 'Z_METHOD_1_2' },
    { parent: 'item_1_3', item: 'action_1_3', title: 'Action 1 3', method: 'Z_METHOD_1_3' },
    { parent: 'item_2_1', item: 'action_2_1', title: 'Action 2 1', method: 'Z_METHOD_2_1' },
    { parent: 'item_3', item: 'action_3', title: 'Action 3', method: 'Z_METHOD_3' },
    { parent: 'item_4', item: 'action_4', title: 'Action 4', method: 'Z_METHOD_4' },
    { parent: 'item_5', item: 'action_5', title: 'Action 5', method: 'Z_METHOD_5' },
  ];
  defaultMethods: IMethodAction[] = [];
  methods: IMethodAction[] = [
    { method: 'Z_METHOD_1_1_1', fields: [
        { field: 'plant', description: 'Plant', type: IFieldType.select, inputType: null, required: true, value: '1000', defaultValue: '1000', length: 4, data: [ '', '1000', '2000', '3000'], minlength: '0', maxlength: '4', step: 1, valid: false },
        { field: 'storageLoc', description: 'Storage location', type: IFieldType.select, inputType: null, required: true, value: '2000', defaultValue: '2000', length: 4, data: [ '1000', '2000', '3000', '4000'], minlength: '0', maxlength: '4', step: 1, valid: false },
      ],
      steps: [ '1' ],
      repeat: false,
    },
    { method: 'Z_METHOD_3', fields: [
        { field: 'material', description: 'Material', type: IFieldType.textbox, inputType: TextboxType.text, required: true, value: '100-002', defaultValue: '100-002', length: 18, data: null, minlength: '6', maxlength: '18', step: 1, valid: false },
        { field: 'plant', description: 'Plant', type: IFieldType.select, inputType: null, required: true, value: '1000', defaultValue: '1000', length: 4, data: [ '1000', '2000', '3000'], minlength: '0', maxlength: '4', step: 1, valid: false },
        { field: 'storageLoc', description: 'Storage location', type: IFieldType.select, inputType: null, required: true, value: '', defaultValue: '', length: 4, data: [ '1001', '1002', '1003'], minlength: '0', maxlength: '4', step: 2, valid: false },
//        { field: 'date', description: 'Date', type: IFieldType.datepicker,  inputType: null,required: true, value: '', defaultValue: '', length: 4, data: null, minlength: '0', maxlength: '10', step: 2, valid: false },
        { field: 'note', description: 'Note', type: IFieldType.textarea, inputType: null, required: false, value: '', defaultValue: '', length: 200, data: null, minlength: '0', maxlength: '1000', step: 3, valid: false },
      ],
      steps: [ '1', '2', '3' ],
      repeat: true,
    },
    { method: 'Z_METHOD_2_1', fields: [
        { field: 'user', description: 'User', type: IFieldType.textbox, inputType: TextboxType.text, required: true, value: '', defaultValue: '', length: 20, data: null, minlength: '5', maxlength: '20', step: 1, valid: false },
        { field: 'pwd', description: 'Password', type: IFieldType.textbox, inputType: TextboxType.password, required: true, value: '', defaultValue: '', length: 20, data: null, minlength: '10', maxlength: '20', step: 1, valid: false },
      ],
      steps: [ '1' ],
      repeat: false,
    },
    { method: 'Z_METHOD_4', fields: [
        { field: 'material', description: 'Material', type: IFieldType.textbox, inputType: TextboxType.text, required: true, value: '100-001', defaultValue: '100-001', length: 18, data: null, minlength: '0', maxlength: '18', step: 1, valid: false },
        { field: 'quantity', description: 'Quantity', type: IFieldType.textbox, inputType: TextboxType.number, required: true, value: '0', defaultValue: '0', length: 10, data: null, minlength: '1', maxlength: '10', step: 1, valid: false },
      ],
      steps: [ '1' ],
      repeat: false,
    },
    { method: 'Z_METHOD_5', fields: [
        { field: 'vendor', description: 'Vendor', type: IFieldType.textbox, inputType: 'text', required: true, value: '', defaultValue: '', length: 10, data: null, minlength: '5', maxlength: '10', step: 1, valid: false },
      ],
      steps: [ '1' ],
      repeat: false,
    },
  ];
  currentItem: IMenuItem = null;
  currentAction: IMenuAction = null;
  currentMethod: IMethodAction = null;
  currentSteps = 0;
  loginService: LoginService;

  constructor( loginService: LoginService, private dialogService: DialogService ) {
    this.loginService = loginService;
    debugger;
    if ( this.loginService.response ) {
      this.menu = this.loginService.response['ET_MENU_ITEM'];
    }
    this.defaultMethods = JSON.parse(JSON.stringify(this.methods));  // deep copy, not a reference
  }

  getCurrentMenu(): Array<any> {
    const res = [];
    for ( let i = 0; i < this.menu.length; i++ ) {
      if ( this.menu[i].parent === this.parent ) {
        for ( let j = 0; j < this.loginService.user.auths.length; j++ ) {
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

  goToNextMenu( currItem: IMenuItem ) {
    this.parent = currItem.item;
    this.currentItem = currItem;
    this.getCurrentMenu();
  }

  getCurrentAction() {
    this.currentAction = null;
    if ( this.currentItem ) {
      for ( let i = 0; i < this.actions.length; i++ ) {
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
      for ( let i = 0; i < this.methods.length; i++ ) {
        if ( this.currentAction.method === this.methods[i].method ) {
          this.currentMethod = this.methods[i];
          for ( let j = 0; j < this.currentMethod.steps.length; j++ ) {
            this.currentSteps++;
          }
          break;
        }
      }
    }
  }

  goToPrevMenu( force: boolean = false ) {
    let dataChanged = false;
    if ( this.currentMethod && force === false ) {
      for ( let k = 0; k < this.currentMethod.fields.length; k++ ) {
        if ( this.currentMethod.fields[k].value !== this.currentMethod.fields[k].defaultValue ) {
          this.dialogService.open( 'Action ' + this.currentAction.title, // title
                                   [ 'Data changed.', 'Do you want to leave action?' ],  // message
                                   'message',   // dialog type
                                   'warning',   // message type
                                   [
                                     { caption: 'Cancel', color: 'accent', close: false },
                                     { caption: 'OK', color: 'primary', close: true }
                                   ],  // buttons
                                   this.dialogCallback
          );
          dataChanged = true;
        }
      }
    }
    if ( !dataChanged ) {
      this.prevMenu();
    }
  }

  dialogCallback = ( response: String ) => {
    debugger;
    if ( response === 'OK' ) {
      this.prevMenu();
    }
  }

  private prevMenu() {
    for ( let i = 0; i < this.menu.length; i++ ) {
      if ( this.menu[i].item === this.parent ) {
        this.parent = this.menu[i].parent;
        for ( let j = 0; j < this.menu.length; j++ ) {
          if ( this.menu[j].item === this.menu[i].parent ) {
            this.currentItem = this.menu[j];
            break;
          }
        }
        break;
      }
    }
    this.methods = JSON.parse(JSON.stringify(this.defaultMethods));  // deep copy, not a reference
    this.getCurrentMenu();
  }

}
