import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceComponent } from './invoice.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';
import { RouterModule } from '@angular/router';

const routes: VexRoutes = [
  {
    path: '',
    component: InvoiceComponent,
    data: {
      toolbarShadowEnabled: true,
      containerEnabled: true,
      breadcrumb: 'Invoice'
    }
  }
];

@NgModule({
  declarations: [InvoiceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    IconModule
  ]
})
export class InvoiceModule {
}
