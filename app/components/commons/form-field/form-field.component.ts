import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { FieldType } from '../../../data/field-type.enum';
import { MethodField } from '../../../data/method-field';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
//  @Input() field : MethodField;
  @Input() field : any;
  fieldType = FieldType;
  
  constructor( private router: Router ) { 
  }

  ngOnInit() {
  }

}
