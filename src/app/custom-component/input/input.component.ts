import { Component, EventEmitter, Injector, Input, OnInit, Output, forwardRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { AbstractControlDirective, FormControl, FormGroupDirective, FormsModule, NG_VALUE_ACCESSOR, NgControl, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { ErrorStateMatcher } from '@angular/material/core';
import { BaseControl } from 'src/app/base/base-control';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger40ms } from 'src/@vex/animations/stagger.animation';

@Component({
  selector: 'wms-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  animations: [fadeInUp400ms, stagger40ms],
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: InputComponent,
      multi: true,
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent extends BaseControl implements OnInit, MatFormFieldControl<any> {
  @Input() label: string;
  @Input() name: string;
  @Input() readonly: boolean = false;
  @Input() type: 'text' | 'number' | 'password' | 'search' = 'text';
  @Input() requiredMsg: string = "Required.";
  @Input() maxlength: number = 250;
  @Input() errorMsg: string;
  @Input() matSuffix: string;
  @Input() icon: any | null = null;
  @Input() floatLabel: 'always' | 'auto' = 'auto'
  @Input() hideRequiredMarker: boolean = false;
  @Input() showClearIcon: boolean = false;

  @Output() iconClick: EventEmitter<any> = new EventEmitter<any>();
  confirmValidParentMatcher = new ConfirmValidParentMatcher();

  constructor(private _injector: Injector,) { super(_injector); }

  override notifyValueChange(): void {
    if (this.onChange) {
      if (this.type === "number") this.onChange(this.number);
      else this.onChange(this.value);
    }
  }
  ngOnInit(): void { }

  IsNullOrWhiteSpace = () => (this.value || "").toString().trim().length === 0;

  get number(): any {
    if (this.value) {
      let value: string = this.value.toString();
      value = value.replace(/,/g, "");
      return parseFloat(value);
    }
  }


  clearValueInput() {
    this.value = '';
  }

}

export class ConfirmValidParentMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.touched || (form && form.submitted)));
  }
}