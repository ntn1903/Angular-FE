import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';
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
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { SecondaryToolbarModule } from 'src/@vex/components/secondary-toolbar/secondary-toolbar.module';
import { TableModule } from 'src/app/custom-component/table/table.module';
import { InputModule } from 'src/app/custom-component/input/input.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import { SYSTEM_CONTAIN } from 'src/app/base/system.contanst';
import { DatePickerModule } from 'src/app/custom-component/date-picker/date-picker.module';
import { SupplierComponent } from './supplier.component';
import { PopupCreateUpdateSupplierComponent } from './popup-create-update-supplier/popup-create-update-supplier.component';

const routes: VexRoutes = [
  { path: '', component: SupplierComponent, data: { breadcrumb: 'Supplier' } }
];

@NgModule({
  declarations: [
    SupplierComponent,
    PopupCreateUpdateSupplierComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    MatDividerModule,
    IconModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    InputModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    MatSnackBarModule,



    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,

    DatePickerModule
  ],
  providers: [DatePipe,],
})
export class SupplierModule { }
