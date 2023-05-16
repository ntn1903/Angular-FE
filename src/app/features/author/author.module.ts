import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './author.component';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';
import { RouterModule } from '@angular/router';
import { SecondaryToolbarModule } from 'src/@vex/components/secondary-toolbar/secondary-toolbar.module';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { IconModule } from '@visurel/iconify-angular';

const routes: VexRoutes = [
  {
    path: '',
    component: AuthorComponent,
    data: { toolbarShadowEnabled: true }
  }
];

@NgModule({
  declarations: [
    AuthorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    SecondaryToolbarModule,
    BreadcrumbsModule,
    IconModule,
  ]
})
export class AuthorModule { }
