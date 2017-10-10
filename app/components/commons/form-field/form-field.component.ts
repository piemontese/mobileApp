import { Component, OnInit, Input } from '@angular/core';

import { FieldType } from '../field-type.enum';
import { MethodField } from '../method-field';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
  @Input() field : MethodField;
  fieldType = FieldType;
  
  constructor() { 
  }

  ngOnInit() {
  }

}
