import { Component, OnInit, Input } from '@angular/core';

import { FieldType } from '../../../data/field-type.enum';
import { MethodField } from '../../../data/method-field';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() menuService: any;
  currentStep: number = 0;

  constructor() { }

  ngOnInit() {
    this.currentStep = 0;
  }

}
