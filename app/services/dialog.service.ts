import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from '../components/commons/dialog/dialog.component';

interface Button {
  caption: string;
  color: string; 
  close: boolean;
};

@Injectable()
export class DialogService {

  constructor( private dialog: MatDialog ) { }

  public open( title, messages, dialogType, messageType, buttons: Button[] ): Observable<boolean> 
  {
    let dialogRef: MatDialogRef<DialogComponent>;

    dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'my-dialog-container',
//      width: '500px',
//      height: '80%',
      disableClose: true,  // modal
    });
    dialogRef.componentInstance.dialogType = dialogType;
    dialogRef.componentInstance.messageType = messageType;
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.messages = messages;
    dialogRef.componentInstance.buttons = buttons;
  
    return dialogRef.afterClosed();
  }
  
}
