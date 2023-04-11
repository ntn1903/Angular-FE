import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { IconsIcComponent } from './icons-ic.component';


const routes: Routes = [
  {
    path: '',
    component: IconsIcComponent,
    data: {
      scrollDisabled: true
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class IconsIcRoutingModule {
}
