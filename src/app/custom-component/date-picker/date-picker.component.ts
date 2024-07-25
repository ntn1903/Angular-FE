import { CommonModule, DatePipe } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, Injector, Input, NgModule, OnInit, forwardRef } from "@angular/core";
import { FormsModule, NG_VALUE_ACCESSOR, NgControl } from "@angular/forms";
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MomentDateAdapter,
  MomentDateModule
} from "@angular/material-moment-adapter";
import {
  MatNativeDateModule,
  MatOptionModule,
  MAT_DATE_FORMATS,
  DateAdapter,
  MAT_DATE_LOCALE,
} from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldControl, MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import moment from "moment";
import { MatButtonModule } from "@angular/material/button";
import { Observable } from "rxjs";
import { BaseControl } from "src/app/base/base-control";
import { SYSTEM_CONTAIN } from "src/app/base/system.contanst";
import { ConfirmValidParentMatcher } from "src/app/custom-component/input/input.component";

@Component({
  selector: 'wms-date-picker',
  
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    DatePipe,
    { provide: MatFormFieldControl, useExisting: DatePickerComponent, multi: true },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DatePickerComponent), multi: true },
    { provide: MAT_DATE_FORMATS, useValue: SYSTEM_CONTAIN.MY_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'vi-VI' },
  ],
})
export class DatePickerComponent extends BaseControl implements OnInit, MatFormFieldControl<any> {
  @Input() label: string;
  @Input() name: string;
  @Input() readonly: boolean = true;
  @Input() type: string = 'text';
  @Input() requiredMsg: string = 'Required.';
  @Input() maxlength: number = 250;
  @Input() pattern: string;
  @Input() selectOnFocus: boolean = false;
  @Input() fxFlex: string;
  @Input() classInput: string;
  @Input() errorMsg: string = "";
  @Input() autocomplete: string;
  @Input() getDateString: boolean = false;
  @Input() appearance: string;
  @Input() min: Date;
  @Input() max: Date;
  @Input() startAt: Date | null = null;
  @Input() hideRequiredMarker: boolean = false;
  @Input() floatLabel: 'always' | 'auto' = 'always'

  confirmValidParentMatcher = new ConfirmValidParentMatcher();

  constructor(private _injec: Injector) {
    super(_injec);
  }
  id: string;
  placeholder: string;
  ngControl: NgControl;
  focused: boolean;
  required: boolean;
  disabled: boolean;
  errorState: boolean;
  controlType?: string;
  autofilled?: boolean;
  userAriaDescribedBy?: string;
  setDescribedByIds(ids: string[]): void {
    throw new Error("Method not implemented.");
  }
  onContainerClick(event: MouseEvent): void {
    throw new Error("Method not implemented.");
  }

  notifyValueChange(): void {
    if (this.onChange) {
      if (this.getDateString && this.value) this.onChange(moment(this.value).format(SYSTEM_CONTAIN.FORMAT_DATE));
      else this.onChange(this.value);
    }
  }
  ngOnInit(): void { }

  IsNullOrWhiteSpace = () => (this.value || '').toString().trim().length === 0;
  get number(): any {
    if (this.value) {
      let value: string = this.value.toString();
      value = value.replace(/,/g, '');
      return parseFloat(value);
    }
  }
}
