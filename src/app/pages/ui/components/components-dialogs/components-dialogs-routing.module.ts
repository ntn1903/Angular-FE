import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { ComponentsDialogsComponent } from './components-dialogs.component';


const routes: Routes = [
  {
    path: '',
    component: ComponentsDialogsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class ComponentsDialogsRoutingModule {
}
