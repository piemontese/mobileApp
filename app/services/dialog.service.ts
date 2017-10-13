import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from '../components/commons/dialog/dialog.component';

@Injectable()
export class DialogService {

  constructor( private dialog: MatDialog ) { }

  public open( title, message, type ): Observable<boolean> {

    let dialogRef: MatDialogRef<DialogComponent>;

    dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'my-dialog-container',
//      width: '500px',
//      height: '80%',
      disableClose: true,  // modal
    });
    dialogRef.componentInstance.type = type;
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }
}
