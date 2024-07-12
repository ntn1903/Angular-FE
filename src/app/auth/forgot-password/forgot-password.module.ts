import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordComponent } from './forgot-password.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { IconModule } from '@visurel/iconify-angular';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';

const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordComponent
  }
];

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    IconModule,
    MatIconModule
  ],
  exports: [RouterModule, QuicklinkModule]

})
export class ForgotPasswordModule {
}
