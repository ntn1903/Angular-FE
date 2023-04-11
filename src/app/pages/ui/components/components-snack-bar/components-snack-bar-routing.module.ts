import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { ComponentsSnackBarComponent } from './components-snack-bar.component';


const routes: Routes = [
  {
    path: '',
    component: ComponentsSnackBarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class ComponentsSnackBarRoutingModule {
}
