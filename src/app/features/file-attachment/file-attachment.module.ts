import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileAttachmentComponent } from './file-attachment.component';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';
import { RouterModule } from '@angular/router';
import { TableModule } from 'src/app/custom-component/table/table.module';

const routes: VexRoutes = [
  { path: '', component: FileAttachmentComponent, data: { breadcrumb: 'File attachment' }  }
];

@NgModule({
  declarations: [
    FileAttachmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    TableModule
  ]
})
export class FileAttachmentModule { }
