import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { IconModule } from '@visurel/iconify-angular';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SelectComponent } from './select.component';
import { ContainerModule } from 'src/@vex/directives/container/container.module';
import { FormElementsRoutingModule } from 'src/app/pages/ui/forms/form-elements/form-elements-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    SelectComponent
  ],
  imports: [
    CommonModule,
    // FormElementsRoutingModule,
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    IconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    // SecondaryToolbarModule,
    // BreadcrumbsModule,
    ContainerModule,

    MatFormFieldModule, FormsModule
  ],
  exports:[SelectComponent]
})
export class SelectModule { }
