import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbCustomComponent } from './breadcrumb-custom.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { SecondaryToolbarModule } from 'src/@vex/components/secondary-toolbar/secondary-toolbar.module';



@NgModule({
  declarations: [
    BreadcrumbComponent,
    BreadcrumbCustomComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    FlexLayoutModule,
    IconModule,
    SecondaryToolbarModule
  ],
  exports:[BreadcrumbComponent]
})
export class BreadcrumbModule { }
