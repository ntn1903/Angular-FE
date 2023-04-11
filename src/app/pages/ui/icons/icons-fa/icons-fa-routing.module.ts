import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { IconsFaComponent } from './icons-fa.component';


const routes: Routes = [
  {
    path: '',
    component: IconsFaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class IconsFaRoutingModule {
}
