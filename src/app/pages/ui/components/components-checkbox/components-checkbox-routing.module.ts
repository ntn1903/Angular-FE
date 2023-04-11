import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { ComponentsCheckboxComponent } from './components-checkbox.component';


const routes: Routes = [
  {
    path: '',
    component: ComponentsCheckboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class ComponentsCheckboxRoutingModule {
}
