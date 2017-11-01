import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DateAdapter, NativeDateAdapter } from '@angular/material';

import { FieldType } from '../../../models/field-type.enum';
import { MethodField } from '../../../models/method-field';
import { DialogService } from '../../../services/dialog.service';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
//  @Input() field : MethodField;
  @Input() field : any;
  fieldType = FieldType;
  
  constructor( private dialogService: DialogService, private dateAdapter: DateAdapter<NativeDateAdapter> ) { 
    dateAdapter.setLocale('it-IT');
  }

  setValue( value: any ) {
    this.field.value = value;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    /*
    this.dialogService.open( "FormFieldComponent", // title
                             "ngOnDestroy: " + this.field.field + " = " + this.field.value,  // message
                             "message",   // dialog type
                             "info",   // message type
                             [
//                               { caption: "Cancel", color: "", close: false },
                               { caption: "OK", color: "primary", close: true }
                             ]  // buttons 
    );
    */
  }

}
