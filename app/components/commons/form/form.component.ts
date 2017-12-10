import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IFieldType } from '../../../models/field-type.enum';
import { IMethodField } from '../../../models/method-field';
import { FieldStepPipe } from '../../../pipes/field-step.pipe';
import { DialogService } from '../../../services/dialog.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() menuService: any;
  currentStep = 0;
  currentFields: Array<any> = [];
  form: FormGroup;

  constructor( private dialogService: DialogService ) { }

  getCurrentFields( index: number ) {
    const fieldStepPipe = new FieldStepPipe;
    this.currentFields = [];
    if ( (index + 1) === this.menuService.currentMethod.fields[index].step ) {
      this.currentFields = fieldStepPipe.transform(this.menuService.currentMethod.fields, this.currentStep + 1);
    }
//    this.setStepValid();
    return this.currentFields;
  }

  setStepValid() {
    this.menuService.currentMethod.steps[this.currentStep].valid = true;
    for ( let i = 0; i < this.currentFields.length; i++ ) {
      if ( !this.currentFields[i].valid ) {
        this.menuService.currentMethod.steps[this.currentStep].valid = false;
      }
    }
  }

  isStepValid( step: number ) {
//    return this.menuService.currentMethod.steps[step].valid;
    const fieldStepPipe = new FieldStepPipe;
    const fields = fieldStepPipe.transform(this.menuService.currentMethod.fields, step + 1);
    for ( let i = 0; i < fields.length; i++ ) {
      if ( !fields[i].valid ) {
        return false;
      }
    }
    return true;
  }

  execAction() {
    const msg: Array<string> = [];
    msg[0] = 'Eseguito metodo ' + this.menuService.currentAction.method;
    for ( let i = 0; i < this.menuService.currentMethod.fields.length; i++ ) {
      msg[i + 1] = this.menuService.currentMethod.fields[i].field + ' = ' + this.menuService.currentMethod.fields[i].value;
    }
    this.dialogService.open( 'Azione ' + this.menuService.currentAction.title, // title
                             msg,  // [ "Eseguito metodo " + this.menuService.currentAction.method ],  // message
                             'message',   // dialog type
                             'info',   // message type
                             [
//                               { caption: "Cancel", color: "", close: false },
                               { caption: 'OK', color: 'primary', close: true },
                             ],  // buttons
                             this.dialogCallback
    );
//    this.currentStep = 0;
//    this.menuService.methods = JSON.parse(JSON.stringify(this.menuService.defaultMethods));  // deep copy, not a reference
//    if ( !this.menuService.currentMethod.repeat ) {
//      this.menuService.goToPrevMenu();
//    }
  }

  dialogCallback = ( response: String ) => {
    this.currentStep = 0;
    this.menuService.methods = JSON.parse(JSON.stringify(this.menuService.defaultMethods));  // deep copy, not a reference
    if ( !this.menuService.currentMethod.repeat ) {
      this.menuService.goToPrevMenu(true);
    }
 }

  ngOnInit() {
    this.currentStep = 0;
  }

}
