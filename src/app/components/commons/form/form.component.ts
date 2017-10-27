import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FieldType } from '../../../data/field-type.enum';
import { MethodField } from '../../../data/method-field';
import { FieldStepPipe } from '../../../pipes/field-step.pipe';
import { DialogService } from '../../../services/dialog.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() menuService: any;
  currentStep: number = 0;
  currentFields: Array<any> = [];
  form: FormGroup;

  constructor( private dialogService: DialogService ) { }

  getCurrentFields( index: number ) { 
    let fieldStepPipe = new FieldStepPipe;
    this.currentFields = [];
    if ( index+1 === this.menuService.currentMethod.fields[index].step )
      this.currentFields = fieldStepPipe.transform(this.menuService.currentMethod.fields, this.currentStep+1);
    return this.currentFields;
  }
  
  execAction() { 
    let msg: Array<string> = [];
    msg[0] = "Eseguito metodo " + this.menuService.currentAction.method;
    for ( let i=0; i<this.menuService.currentMethod.fields.length; i++ )
      msg[i+1] = this.menuService.currentMethod.fields[i].field + " = " + this.menuService.currentMethod.fields[i].value;
    this.dialogService.open( "Azione " + this.menuService.currentAction.title, // title
                             msg,  //[ "Eseguito metodo " + this.menuService.currentAction.method ],  // message
                             "message",   // dialog type
                             "info",   // message type
                             [
//                               { caption: "Cancel", color: "", close: false },
                               { caption: "OK", color: "primary", close: true }
                             ]  // buttons 
    );
    this.menuService.goToPrevMenu();
  }

  ngOnInit() {
    this.currentStep = 0;
  }

}
