import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { HelpCenterGettingStartedComponent } from './help-center-getting-started.component';


const routes: Routes = [
  {
    path: '',
    component: HelpCenterGettingStartedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class HelpCenterGettingStartedRoutingModule {
}
