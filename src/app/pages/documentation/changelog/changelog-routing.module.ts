import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { ChangelogComponent } from './changelog.component';


const routes: Routes = [
  {
    path: '',
    component: ChangelogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class ChangelogRoutingModule {
}
