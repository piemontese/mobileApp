import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DateAdapter, NativeDateAdapter } from '@angular/material';

import { IFieldType } from '../../../models/field-type.enum';
import { IMethodField } from '../../../models/method-field';
import { DialogService } from '../../../services/dialog.service';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
//  @Input() field : MethodField;
  @Input() field: any;
  fieldType = IFieldType;
  value: FormControl;

  constructor( private dialogService: DialogService, private dateAdapter: DateAdapter<NativeDateAdapter> ) {
    dateAdapter.setLocale('it-IT');
  }

  setValue( value: any ) {
    this.field.value = this.value.value;
    this.field.valid = !this.value.invalid;
  }

  getErrorMessage() {
    return this.value.hasError('required') ? 'You must enter a value' :
        this.value.hasError('minlength') ? 'Value has to be greater or equal then ' + this.field.minlength :
        this.value.hasError('maxlength') ? 'Value has to be greater or equal then ' + this.field.maxlength :
        '';
  }

  ngOnInit() {
    if ( this.field.required ) {
      this.value = new FormControl('', [ Validators.required,
                                         Validators.minLength(this.field.minlength),
                                         Validators.maxLength(this.field.maxlength)
                                       ]);
    } else {
      this.value = new FormControl('', [ Validators.minLength(this.field.minlength),
                                         Validators.maxLength(this.field.maxlength)
                                       ]);
    }
    this.value.setValue(this.field.value);
    this.field.valid = !this.value.invalid;
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
