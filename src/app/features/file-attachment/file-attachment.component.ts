import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { BaseService } from 'src/app/base/base.service';
import { FileAttachment } from 'src/app/models/file-attachment/file-attachment.model';
import { FileAttachmentApiService } from './file-attachment-api.service';

@Component({
  selector: 'vex-file-attachment',
  templateUrl: './file-attachment.component.html',
  styleUrls: ['./file-attachment.component.scss']
})
export class FileAttachmentComponent extends BaseService implements OnInit {
  columns: TableColumn<FileAttachment>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Id', property: 'id', type: 'number', visible: true, },
    { label: 'File Name', property: 'fileName', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'File Type', property: 'fileType', type: 'text', visible: true },
    { label: 'Description', property: 'description', type: 'text', visible: false },
    { label: 'Upload At', property: 'createdAt', type: 'datetime', visible: true },
    { label: 'Creator Id', property: 'creatorId', type: 'text', visible: false },
    { label: 'Uploaded by', property: 'creator', type: 'text', visible: true },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];

  fileAttachments: FileAttachment[] = [];
  constructor(
    private fileAttachmentApiService: FileAttachmentApiService,
  ) {
    super();
    this.loadFileAttachmentData();
  }

  loadFileAttachmentData() {
    this.fileAttachmentApiService.getList({}).subscribe(response => {
      this.fileAttachments = response.data;
    })
  }

  ngOnInit(): void {
  }

  onDeleteFile(file: FileAttachment) {
    this.fileAttachmentApiService.delete(file.id).subscribe(_ => this.loadFileAttachmentData());
  }

  onDeleteFiles(categories: FileAttachment[]) {
    let listId = [];
    categories.forEach(m => listId.push(m.id))

    this.fileAttachmentApiService.deleteMany(listId).subscribe(_ => this.loadFileAttachmentData());
  }

}
