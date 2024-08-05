import { Component, OnInit } from '@angular/core';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger40ms } from 'src/@vex/animations/stagger.animation';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { Category } from 'src/app/models/category/category.model';
import { CategoryApiService } from './category-api.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupCreateUpdateCategoryComponent } from './popup-create-update-category/popup-create-update-category.component';
import { BaseService } from 'src/app/base/base.service';
import { DatePipe } from '@angular/common';
import * as XLSX from 'xlsx';
import { FileAttachmentApiService } from '../file-attachment/file-attachment-api.service';
import { CreateUpdateFileAttachment } from 'src/app/models/file-attachment/create-update-file-attachment.model';
import { ResponseModel } from 'src/app/models/response-model.model';


@Component({
  selector: 'vex-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  animations: [fadeInUp400ms, stagger40ms],
  providers: [DatePipe,],
})
export class CategoryComponent extends BaseService implements OnInit {
  columns: TableColumn<Category>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Id', property: 'id', type: 'number', visible: true, },
    { label: 'Name', property: 'name', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Description', property: 'description', type: 'text', visible: true },
    { label: 'Created At', property: 'createdAt', type: 'datetime', visible: true },
    { label: 'Creator Id', property: 'creatorId', type: 'text', visible: false },
    { label: 'Creator', property: 'creator', type: 'text', visible: true },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];

  categories: Category[] = [];
  constructor(
    private dialog: MatDialog,
    private categoryApiService: CategoryApiService,
    private datePipe: DatePipe,
    private fileAttachmentApiService: FileAttachmentApiService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.categoryApiService.getList({ id: 0, name: '' }).subscribe(response => {
      this.categories = response.data;
    })
  }

  onCreateUpdateCategory(category?: Category) {
    this.dialog
      .open(PopupCreateUpdateCategoryComponent,
        {
          data: this.isUndefined(category) ? {} : category,
          autoFocus: false,
        }
      )
      .afterClosed().subscribe(updatedCategory => {
        if (updatedCategory) { this.loadData(); }
      });
  }

  onDeleteCategory(category: Category) {
    this.categoryApiService.delete(category.id).subscribe(res => {
      this.loadData();
    });
  }

  onExportCategory() {
    const fileName = this.datePipe.transform(new Date(), "YYYYMMdd") + '_Category'
    this.categoryApiService.exportExcel(fileName);
  }

  fileUploaded: File;
  onUploadCategory(event: any) {
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
          // fileName: file.name.replace('.xlsx', ''),
          // fileType: fileReader1.result.toString().split(/[:,;]/)[1],
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

  onDeleteCategories(categories: Category[]) {
    let listId = [];
    categories.forEach(m => listId.push(m.id))

    this.categoryApiService.deleteMany(listId).subscribe(_ => this.loadData());
  }
}
