import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';
import { ProductComponent } from './product.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { IconModule } from '@visurel/iconify-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { ContainerModule } from 'src/@vex/directives/container/container.module';
import { QuicklinkModule } from 'ngx-quicklink';
import { ProductCreateUpdateComponent } from './product-create-update/product-create-update.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { SecondaryToolbarModule } from 'src/@vex/components/secondary-toolbar/secondary-toolbar.module';
import { TableModule } from 'src/app/custom-component/table/table.module';
import { InputModule } from 'src/app/custom-component/input/input.module';
import { AuthGuardService } from 'src/app/base/guard';

const routes: VexRoutes = [
  {
    path: '',
    component: ProductComponent,
    data: { breadcrumb: 'Product' },
  }
];

@NgModule({
  declarations: [ProductComponent, ProductCreateUpdateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageLayoutModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    IconModule,
    FormsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    ContainerModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    MatDividerModule,
    SecondaryToolbarModule,
    TableModule,
    InputModule,
  ],
})
export class ProductModule { }
