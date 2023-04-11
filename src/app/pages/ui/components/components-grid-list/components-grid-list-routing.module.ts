import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { ComponentsGridListComponent } from './components-grid-list.component';


const routes: Routes = [
  {
    path: '',
    component: ComponentsGridListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class ComponentsGridListRoutingModule {
}
