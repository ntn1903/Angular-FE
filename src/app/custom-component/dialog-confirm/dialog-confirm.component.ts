import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { BaseService } from 'src/app/base/base.service';

@Component({
  selector: 'vex-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent extends BaseService implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public message: string,
    public dialogRef: MatDialogRef<DialogConfirmComponent>,
    // priavte dialogConfig: MatDialogConfig<DialogConfirmComponent>,
  ) {
    super();
  }
  ngOnInit(): void {
    this.dialogRef.disableClose = true;
    this.dialogRef.updateSize('25%', '20%');
  }
}

const defaultDialogConfig = new MatDialogConfig().autoFocus = false;

