import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { ComponentsTooltipComponent } from './components-tooltip.component';


const routes: Routes = [
  {
    path: '',
    component: ComponentsTooltipComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class ComponentsTooltipRoutingModule {
}
