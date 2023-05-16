import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';
import { RouterModule } from '@angular/router';

const routes: VexRoutes = [
  {
    path: '',
    component: BookComponent,
    data: { toolbarShadowEnabled: false }
  }
];

@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class BookModule { }
