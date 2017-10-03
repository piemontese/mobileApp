import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() fields: any[];
//  fields: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

}
