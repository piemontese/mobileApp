import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UserData } from '../models/user-data';
import { IUser } from '../models/user';
import { DialogService } from '../services/dialog.service';
import { IFieldType } from '../models/field-type.enum';
import { TextboxType } from '../models/textbox-type';
import { IMethodField } from '../models/method-field';

@Injectable()
export class LoginService {
  private data: UserData;
//  baseUrl = 'http://mnibm09.novellini.it:8066/sap/bc/webrfc';
  baseUrl = 'http://127.0.0.1:8000/sap/bc/webrfc';
  _FUNCTION = 'Z_WRFC_INTERFACE';
  callback = 'JSONP_CALLBACK';
  method = 'Z_WRFC_GET_MENU';
  response: any;
  authentication = false;  // pass user and password to basic http authentication
//  sapUser = 'novedev';
//  sapPassword = 'init1234';
  sapUser = 'developer';
  sapPassword = 'Ostrakon1!x';
  progress = false;
  public user: IUser;
  public logged: Boolean = false;
  public users: IUser[] = [
    { user: 'user1', password: 'dXNlcjE=', firstName: 'Antonio', lastName: 'Bianchi' , auths: [
      'auth1', 'auth2', 'auth3', 'auth4', 'auth5'] },
    { user: 'user2', password: 'dXNlcjI=', firstName: 'Matteo', lastName: 'Rossi' , auths: [ 'auth1', 'auth4', 'auth5'] },
    { user: 'user3', password: 'dXNlcjM=', firstName: 'Giuseppe', lastName: 'Verdi' , auths: [ 'auth4', 'auth5'] },
  ];
  public fieldType: IFieldType;
  public fields: IMethodField[] = [
        { field: 'user', description: 'User', type: IFieldType.textbox, inputType: TextboxType.text, required: true, value: '', defaultValue: '', length: 20, data: null, minlength: '5', maxlength: '20', step: 1, valid: false },
        { field: 'pwd', description: 'Password', type: IFieldType.textbox, inputType: TextboxType.password, required: true, value: '', defaultValue: '', length: 20, data: null, minlength: '5', maxlength: '20', step: 1, valid: false },
      ];

  constructor( private router: Router, private dialogService: DialogService ) { }

  login( user: string, password: string ) {
    this.callWebrfc(user, password);
  }

  logout() {
    this.logged = false;
    this.router.navigate(['login']);
  }

  isLogged() {
    return this.logged;
  }

  private callWebrfc( user: string, password: string ) {
    const webrfcUrl = `${this.baseUrl}?_FUNTION=${this.method}&callback${this.method}`;

    const jsonData = {
          '_FUNCTION':  this._FUNCTION,
          'callback':   this.callback
 //         'sap-user':   'novedev',
 //         'sap-password': 'init1234'
    };

    if ( this.authentication ) {
      jsonData['sap-user'] = this.sapUser;
      jsonData['sap-password'] = this.sapPassword;
    }

    if ( this.method !== '' ) {
      jsonData['method'] = this.method;
    }

    const so = this;
    this.progress = true;
    jQuery.ajax({
        url: this.baseUrl,
        data: jsonData,
        async: false,
        type: 'POST',
        dataType: 'jsonp',
        contentType: 'application/json',
        crossDomain: true,
        jsonpCallback: jsonData.callback,
        timeout: 6000, // sets timeout to 60 seconds
        success: function(data) {
          // console.log(data);
//          so.response = data;
          const json = decodeURIComponent( JSON.stringify( data ) );
          so.response = JSON.parse( json );
          so.progress = false;
          so.checkLogin(user, password);
        },
        error: function (data, status, error) {
          debugger;
//          alert(status + ' - ' + error);
          so.dialogService.open( 'Server connection',   // title
                                 ['Server unavailable',
                                  'Running in local demo mode'],  // array of messages
                                 'message',   // dialog type
                                 'error',   // message type
                                 [
                                 { caption: 'OK', color: 'primary', close: true },
    //                             { caption: "Cancel", color: "warn", close: true }
                               ]  // buttons
          );
          so.response = null;
          so.progress = false;
          so.checkLogin(user, password);
        }
    });
  }

  private checkLogin( user: string, password: string ) {
    for ( let i = 0; i < this.users.length; i++ ) {
      if ( this.users[i].user === atob(user) && this.users[i].password === password ) {
        this.user = this.users[i];
        this.logged = true;
        console.log(this.response);
//        this.menuService.setMenu();
        this.router.navigate(['menu']);
        return;
      }
    }

    this.dialogService.open( 'Login',   // title
                             ['Utente o password errati'],  // array of messages
                             'message',   // dialog type
                             'error',   // message type
                             [
                               { caption: 'OK', color: 'primary', close: true },
//                               { caption: "Cancel", color: "warn", close: true }
                             ]  // buttons
      );
}

}
