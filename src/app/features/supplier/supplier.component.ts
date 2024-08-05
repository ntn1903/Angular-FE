import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { BaseService } from 'src/app/base/base.service';
import { Supplier } from 'src/app/models/supplier/supplier.model';
import { SupplierApiService } from './supplier-api.service';
import { PopupCreateUpdateSupplierComponent } from './popup-create-update-supplier/popup-create-update-supplier.component';
import { CreateUpdateFileAttachment } from 'src/app/models/file-attachment/create-update-file-attachment.model';
import { FileAttachmentApiService } from '../file-attachment/file-attachment-api.service';
import { ResponseModel } from 'src/app/models/response-model.model';
import * as XLSX from 'xlsx';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'vex-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent extends BaseService implements OnInit {
  columns: TableColumn<Supplier>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Id', property: 'id', type: 'number', visible: true, },
    { label: 'Name', property: 'name', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Phone', property: 'phone', type: 'text', visible: true, },
    { label: 'Address', property: 'address', type: 'text', visible: true, },
    { label: 'Description', property: 'description', type: 'text', visible: true },
    { label: 'Created At', property: 'createdAt', type: 'datetime', visible: true },
    { label: 'Creator Id', property: 'creatorId', type: 'text', visible: false },
    { label: 'Creator', property: 'creator', type: 'text', visible: true },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];

  suppliers: Supplier[] = [];
  constructor(
    private dialog: MatDialog,
    private datePipe: DatePipe,
    private supplierApiService: SupplierApiService,
    private fileAttachmentApiService: FileAttachmentApiService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.supplierApiService.getList({ id: 0, name: '' }).subscribe(response => {
      this.suppliers = response.data;
    })
  }

  onCreateUpdateSupplier(supplier?: Supplier) {
    this.dialog
      .open(PopupCreateUpdateSupplierComponent,
        {
          width: '40%',
          data: this.isUndefined(supplier) ? {} : supplier,
          autoFocus: false,
        }
      )
      .afterClosed().subscribe(updatedSupplier => {
        if (updatedSupplier) { this.loadData(); }
      });
  }

  onDeleteSupplier(supplier: Supplier) {
    this.supplierApiService.delete(supplier.id).subscribe(res => {
      this.loadData();
    });
  }

  onDeleteSuppliers(suppliers: Supplier[]) {
    let listId = [];
    suppliers.forEach(m => listId.push(m.id))

    this.supplierApiService.deleteMany(listId).subscribe(_ => this.loadData());
  }

  fileUploaded: File;
  onUploadSupplier(event: any) {
    if (event.target.files.length == 0) return;
    // this.dataUpload.data = [];
    const file = event.target.files[0];

    const fileReader1 = new FileReader();
    fileReader1.readAsDataURL(file);

    const fileReader2 = new FileReader();
    fileReader2.readAsArrayBuffer(file);

    if (event.target.files && file) {
      fileReader1.onload = (e: any) => {
        const input: CreateUpdateFileAttachment = {
          id: 0,
          fileName: this.getFileName(file),
          fileType: this.getFileType(file),
          fileData: fileReader1.result.toString().split(/[:,;]/)[3],
          createdAt: undefined,
          creatorId: '',
          description: ''
        }

        this.fileAttachmentApiService.create(input).subscribe((res: ResponseModel) => {
          if (res.isSuccess) {
            fileReader2.onload = (e: any) => {
              const data = new Uint8Array(e.target.result);
              const workbook = XLSX.read(data, { type: 'array' });
              const worksheet = workbook.Sheets[workbook.SheetNames[0]];
              const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
              // jsonData.slice(0).map((m: any) => {
              //   this.dataUpload.data.push({ name: m[0], description: m[1], id: 0, createdAt: null, creatorId: null });
              // });
              // this.dataUpload.data.shift();
              // console.log(this.dataUpload)
            }
          }
        })
      }
    }
  }

  onExportSupplier() {
    const fileName = this.datePipe.transform(new Date(), "YYYYMMdd") + '_Supplier'
    // this.categoryApiService.exportExcel(fileName);
  }

}
