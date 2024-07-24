import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseService } from 'src/app/base-services/base.service';
import { Category } from 'src/app/models/category/category.model';
import { CategoryApiService } from '../category-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import { ResponseModel } from 'src/app/models/response-model.model';

@Component({
  selector: 'vex-popup-create-update-category',
  templateUrl: './popup-create-update-category.component.html',
  styleUrls: ['./popup-create-update-category.component.scss']
})
export class PopupCreateUpdateCategoryComponent extends BaseService implements OnInit {

  firstDayOfMonth = this.datePipe.transform(new Date(new Date().getFullYear(), new Date().getMonth(), 1), "YYYY-MM-dd");
  // today = this.datePipe.transform(new Date(), "YYYY-MM-dd");
  today = new Date();


  mode: 'create' | 'update' = 'create';
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public receivedData: any,
    public dialogRef: MatDialogRef<PopupCreateUpdateCategoryComponent>,
    private fb: FormBuilder,
    private apiCategory: CategoryApiService,
    private datePipe: DatePipe,
    // private snackbar: MatSnackBar,
  ) {
    super();
  }

  ngOnInit(): void {

    this.receivedData = new Category(this.receivedData);
    this.mode = this.receivedData.id == 0 ? 'create' : 'update';

    // this.form = this.fb.group({
    //   id: [this.receivedData.id],
    //   name: this.receivedData.name || '',
    //   description: this.receivedData.description || '',
    //   createdAt: this.receivedData.createdAt || '',
    //   creatorId: this.receivedData.creatorId || '',
    // });
  }

  onUpdate() {
    this.receivedData.createdAt = this.datePipe.transform(this.receivedData.createdAt, "YYYY-MM-dd");

    this.apiCategory.update(this.receivedData).subscribe((res: ResponseModel) => { this.dialogRef.close(res.data); });
  }
}
