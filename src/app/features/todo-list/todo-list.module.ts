import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { IconModule } from '@visurel/iconify-angular';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';
import { TodoListComponent } from './todo-list.component';
import { RouterModule } from '@angular/router';
import { ScrollbarModule } from 'src/@vex/components/scrollbar/scrollbar.module';
import { DateTokensModule } from 'src/@vex/pipes/date-tokens/date-tokens.module';
import { ScrumboardDialogModule } from 'src/app/pages/apps/scrumboard/components/scrumboard-dialog/scrumboard-dialog.module';
import { PopoverModule } from 'src/@vex/components/popover/popover.module';
import { ContainerModule } from 'src/@vex/directives/container/container.module';
import { QuicklinkModule } from 'ngx-quicklink';
import { TodoListDialogComponent } from './todo-list-dialog/todo-list-dialog.component';

const routes: VexRoutes = [
  {
    path: '',
    redirectTo: '1'
  },
  {
    path: ':scrumboardId',
    component: TodoListComponent,
    data: {
      scrollDisabled: true,
      containerEnabled: true
    }
  }
];

@NgModule({
  declarations: [
    TodoListComponent,
    TodoListDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    ScrollbarModule,
    MatButtonModule,
    DragDropModule,
    IconModule,
    DateTokensModule,
    MatTooltipModule,
    ScrumboardDialogModule,
    PopoverModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    ContainerModule
  ],
  exports: [RouterModule, QuicklinkModule]
})
export class TodoListModule { }
