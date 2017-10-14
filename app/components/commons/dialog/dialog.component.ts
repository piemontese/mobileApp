import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';

interface Button {
  caption: string;
  color: string; 
  close: boolean;
};

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  public dialogType: string = "message";
  public title: string = "";
  public message: string = "";
  public messageType: string = "info";
  public buttons: Button[];

  constructor( public messageBox: MatDialogRef<DialogComponent> ) { }

  ngOnInit() {
  }

}


