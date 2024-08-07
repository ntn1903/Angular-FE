import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpCenterGuidesComponent } from './help-center-guides.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '@visurel/iconify-angular';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HelpCenterGuidesGuideComponent } from './help-center-guides-guide/help-center-guides-guide.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HelpCenterGuidesComponent
  }
];

@NgModule({
  declarations: [HelpCenterGuidesComponent, HelpCenterGuidesGuideComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    IconModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDialogModule
  ],
  entryComponents: [HelpCenterGuidesGuideComponent]
})
export class HelpCenterGuidesModule {
}
