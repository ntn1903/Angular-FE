import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error500Component } from '../../pages/error-500/error-500.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';

const routes: VexRoutes = [
  {
    path: '',
    component: Error500Component,
    data: {
      containerEnabled: true,
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  declarations: [Error500Component],
  imports: [
    CommonModule,
    FlexLayoutModule,
    IconModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, QuicklinkModule]
})
export class Error500Module {
}
