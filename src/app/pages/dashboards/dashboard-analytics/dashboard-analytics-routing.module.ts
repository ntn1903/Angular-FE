import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { DashboardAnalyticsComponent } from './dashboard-analytics.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardAnalyticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class DashboardAnalyticsRoutingModule {
}
