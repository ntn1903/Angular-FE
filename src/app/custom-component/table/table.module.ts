import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSelectModule } from "@angular/material/select";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { IconModule } from "@visurel/iconify-angular";
import { BreadcrumbsModule } from "src/@vex/components/breadcrumbs/breadcrumbs.module";
import { PageLayoutModule } from "src/@vex/components/page-layout/page-layout.module";
import { ContainerModule } from "src/@vex/directives/container/container.module";
import { TableComponent } from "./table.component";
import { TransformDataTable } from "src/app/base/transform-data-table";
import { MatGridListModule } from "@angular/material/grid-list";
import { InputModule } from "../input/input.module";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatDividerModule } from "@angular/material/divider";
import { SecondaryToolbarModule } from "src/@vex/components/secondary-toolbar/secondary-toolbar.module";
import { LayoutModule } from "src/@vex/layout/layout.module";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
@NgModule({
    declarations: [TableComponent, TransformDataTable],
    imports: [
        CommonModule,
        PageLayoutModule,
        ReactiveFormsModule,
        HttpClientModule,
        ContainerModule,
        FlexLayoutModule,
        FormsModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatCheckboxModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatSelectModule,
        MatProgressBarModule,
        BreadcrumbsModule,
        IconModule,
        MatGridListModule,
        InputModule,
        MatTooltipModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatInputModule,
        MatRadioModule,
        MatDividerModule,
        SecondaryToolbarModule,
        LayoutModule
    ],
    exports: [TableComponent, TransformDataTable],
    providers: [
        // { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'standard' } } //outline, always, standard
    ],

})
export class TableModule { }