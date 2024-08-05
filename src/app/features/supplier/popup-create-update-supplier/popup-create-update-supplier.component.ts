import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseService } from 'src/app/base/base.service';
import { Mode } from 'src/app/enums/mode';
import { SupplierApiService } from '../supplier-api.service';
import { DatePipe } from '@angular/common';
import { Supplier } from 'src/app/models/supplier/supplier.model';
import { ResponseModel } from 'src/app/models/response-model.model';

@Component({
  selector: 'vex-popup-create-update-supplier',
  templateUrl: './popup-create-update-supplier.component.html',
  styleUrls: ['./popup-create-update-supplier.component.scss']
})
export class PopupCreateUpdateSupplierComponent extends BaseService implements OnInit {
  firstDayOfMonth = this.datePipe.transform(new Date(new Date().getFullYear(), new Date().getMonth(), 1), "YYYY-MM-dd");
  // today = this.datePipe.transform(new Date(), "YYYY-MM-dd");
  today = new Date();
  mode: Mode = Mode.None;
  dialogLabel: string = '';
  buttonLabel: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public receivedData: Supplier,
    public dialogRef: MatDialogRef<PopupCreateUpdateSupplierComponent>,
    private apiSupplierService: SupplierApiService,
    private datePipe: DatePipe,
  ) {
    super();
    this.receivedData = new Supplier(this.receivedData);
    this.mode = this.isUndefined(this.receivedData.id) ? Mode.Create : Mode.Update;
    this.dialogLabel = this.isUndefined(this.receivedData.id) ? Mode[Mode.Create] : Mode[Mode.Update];
    this.buttonLabel = this.isUndefined(this.receivedData.id) ? Mode[Mode.Create] : Mode[Mode.Update];
  }

  ngOnInit(): void { }

  createOrUpdateSupplier() {
    switch (this.mode) {
      case Mode.Create:
        this.apiSupplierService.create(this.receivedData).subscribe((res: ResponseModel) => { this.dialogRef.close(res.data); });
        break;
      case Mode.Update:
        this.apiSupplierService.update(this.receivedData).subscribe((res: ResponseModel) => { this.dialogRef.close(res.data); });
        break;
    }
    // this.receivedData.createdAt = this.datePipe.transform(this.receivedData.createdAt, "YYYY-MM-dd");
  }
}
