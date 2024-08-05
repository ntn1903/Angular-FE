import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseService } from 'src/app/base/base.service';
import { ProductApiService } from '../product-api.service';
import { DatePipe } from '@angular/common';
import { Product } from 'src/app/models/product/product.model';
import { Mode } from 'src/app/enums/mode';
import { ResponseModel } from 'src/app/models/response-model.model';
import { CategoryApiService } from '../../category/category-api.service';
import { ComboboxApiService } from 'src/app/base/combobox-api.service';
import { forkJoin } from 'rxjs';
import { SelectBoxModel } from 'src/app/models/select-box.model';
import { SupplierApiService } from '../../supplier/supplier-api.service';

@Component({
  selector: 'vex-product-create-update',
  templateUrl: './product-create-update.component.html',
  styleUrls: ['./product-create-update.component.scss']
})


export class ProductCreateUpdateComponent extends BaseService implements OnInit {
  mode: Mode = Mode.None;
  dialogLabel: string = '';
  buttonLabel: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public receivedData: Product,
    public dialogRef: MatDialogRef<ProductCreateUpdateComponent>,
    private apiProduct: ProductApiService,
    private datePipe: DatePipe,
    private apiCate: CategoryApiService,
    private apiSupp: SupplierApiService,
  ) {
    super();

    this.receivedData = new Product(this.receivedData);
    this.mode = this.isUndefined(this.receivedData.id) ? Mode.Create : Mode.Update;
    this.dialogLabel = this.isUndefined(this.receivedData.id) ? Mode[Mode.Create] : Mode[Mode.Update];
    this.buttonLabel = this.isUndefined(this.receivedData.id) ? Mode[Mode.Create] : Mode[Mode.Update];

    forkJoin([
      this.apiCate.getCategories(),
      this.apiSupp.getSuppliers(),
    ]).subscribe(res => {
      this.selectBoxCategory = res[0];
      this.selectBoxSupplier = res[1];
    })
  }

  selectBoxCategory: SelectBoxModel[] = [];
  selectBoxSupplier: SelectBoxModel[] = [];

  ngOnInit(): void { }

  createOrUpdateCategory() {
    if (this.isUndefined(this.receivedData.categoryId)) this.receivedData.categoryId = 0;
    if (this.isUndefined(this.receivedData.supplierId)) this.receivedData.supplierId = 0;
    switch (this.mode) {
      case Mode.Create:
        this.apiProduct.create(this.receivedData).subscribe((res: ResponseModel) => { this.dialogRef.close(res.data); });
        break;
      case Mode.Update:
        this.apiProduct.update(this.receivedData).subscribe((res: ResponseModel) => { this.dialogRef.close(res.data); });
        break;
    }
  }

}

