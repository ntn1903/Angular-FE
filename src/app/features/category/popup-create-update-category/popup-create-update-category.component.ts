import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseService } from 'src/app/base/base.service';
import { Category } from 'src/app/models/category/category.model';
import { CategoryApiService } from '../category-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import { ResponseModel } from 'src/app/models/response-model.model';
import { Mode } from 'src/app/enums/mode';

@Component({
  selector: 'vex-popup-create-update-category',
  templateUrl: './popup-create-update-category.component.html',
  styleUrls: ['./popup-create-update-category.component.scss']
})
export class PopupCreateUpdateCategoryComponent extends BaseService implements OnInit {
  firstDayOfMonth = this.datePipe.transform(new Date(new Date().getFullYear(), new Date().getMonth(), 1), "YYYY-MM-dd");
  // today = this.datePipe.transform(new Date(), "YYYY-MM-dd");
  today = new Date();
  mode: Mode = Mode.None;
  dialogLabel: string = '';
  buttonLabel: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public receivedData: any,
    public dialogRef: MatDialogRef<PopupCreateUpdateCategoryComponent>,
    private apiCategory: CategoryApiService,
    private datePipe: DatePipe,
    // private snackbar: MatSnackBar,
  ) {
    super();
    this.receivedData = new Category(this.receivedData);
    this.mode = this.isUndefined(this.receivedData.id) ? Mode.Create : Mode.Update;
    this.dialogLabel = this.isUndefined(this.receivedData.id) ? Mode[Mode.Create] : Mode[Mode.Update];
    this.buttonLabel = this.isUndefined(this.receivedData.id) ? Mode[Mode.Create] : Mode[Mode.Update];
  }

  ngOnInit(): void { }

  createOrUpdateCategory() {
    switch (this.mode) {
      case Mode.Create:
        this.apiCategory.create(this.receivedData).subscribe((res: ResponseModel) => { this.dialogRef.close(res.data); });
        break;
      case Mode.Update:
        this.apiCategory.update(this.receivedData).subscribe((res: ResponseModel) => { this.dialogRef.close(res.data); });
        break;
    }
    // this.receivedData.createdAt = this.datePipe.transform(this.receivedData.createdAt, "YYYY-MM-dd");
  }
}
