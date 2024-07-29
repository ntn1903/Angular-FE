import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from './supplier.component';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { IconModule } from '@visurel/iconify-angular';
import { TableModule } from 'src/app/custom-component/table/table.module';

const routes: VexRoutes = [
  { path: '', component: SupplierComponent, data: { toolbarShadowEnabled: true } }
];

@NgModule({
  declarations: [
    SupplierComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule
  ]
})
export class SupplierModule { }
