import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error404Component } from './error-404.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';

const routes: VexRoutes = [
  {
    path: '',
    component: Error404Component,
    data: {
      containerEnabled: true,
      toolbarShadowEnabled: true
    }
  }
];


@NgModule({
  declarations: [Error404Component],
  imports: [
    CommonModule,
    FlexLayoutModule,
    IconModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, QuicklinkModule]
})
export class Error404Module {
}
