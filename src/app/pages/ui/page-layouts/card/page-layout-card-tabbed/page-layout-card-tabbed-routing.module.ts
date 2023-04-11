import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { PageLayoutCardTabbedComponent } from './page-layout-card-tabbed.component';


const routes: Routes = [
  {
    path: '',
    component: PageLayoutCardTabbedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class PageLayoutCardTabbedRoutingModule {
}
