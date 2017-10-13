import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  public title: string = "";
  public message: string = "";
  public type: string = "info";

  constructor( public messageBox: MatDialogRef<DialogComponent> ) { }

  ngOnInit() {
  }

}


