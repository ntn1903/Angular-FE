import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidesComponent } from './guides.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { IconModule } from '@visurel/iconify-angular';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { HelpCenterGuidesModule } from '../../pages/apps/help-center/help-center-guides/help-center-guides.module';
import { RouterModule } from '@angular/router';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';

const routes: VexRoutes = [
  {
    path: '',
    component: GuidesComponent,
    data: {
      toolbarShadowEnabled: true
    }
  }
];

@NgModule({
  declarations: [GuidesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatButtonModule,
    IconModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    HelpCenterGuidesModule
  ]
})
export class GuidesModule {
}
