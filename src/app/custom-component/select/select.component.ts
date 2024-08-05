import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Injector, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NG_VALUE_ACCESSOR, NgControl, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher, MatOption } from '@angular/material/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { AppConsts } from 'src/app/base/app.contanst';
import { BaseControl } from 'src/app/base/base-control';
import { BaseService } from 'src/app/base/base.service';
import { ServiceBase } from 'src/app/base/service-interface.service';
import { SelectBoxModel } from 'src/app/models/select-box.model';
import { CountryState } from 'src/app/pages/ui/forms/form-elements/form-elements.component';

@Component({
  selector: 'wms-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [stagger60ms, fadeInUp400ms],
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: SelectComponent,
      multi: true,
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})

export class SelectComponent extends BaseControl implements OnInit, MatFormFieldControl<any> {
  @Input() title: string;
  @Input() multiple: boolean = false;
  @Input() clearText: string = '--None--';
  @Input() data: SelectBoxModel[] = [];
  @Input() allValue: boolean;
  @Input() allValueText: string;
  @Input() isClear: boolean = false;
  @Input() icon: any | null = null;

  @Output("selectAllEvent") selectAllMessage = new EventEmitter();
  @Output("selectPerItemEvent") selectPerItemMessage = new EventEmitter();

  @ViewChild("allSelected") allSelected: MatOption;

  confirmValidParentMatcher = new ConfirmValidParentMatcher();

  constructor(private _injector: Injector,) { super(_injector); }

  ngOnInit(): void { }

  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);
  selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  matcher = new MyErrorStateMatcher();

  checkedUncheckedSelectAll() {
    if (this.allValue === true) {
      if (this.allSelected.selected === true) {
        let event = "selectAll";
        this.selectAllMessage.emit(event);
      } else {
        let event = "unSelectAll";
        this.selectAllMessage.emit(event);
      }
    }
  }

  checkedUncheckedPerItem(event: any) {
    if (event) { this.selectPerItemMessage.emit(event); }
  }


  get DATA() {
    return this.data;
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export class ConfirmValidParentMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null,): boolean {
    if (control?.touched && !control.value && (AppConsts.resetFlag == true)) {
      control.markAsUntouched();
      return false;
    }
    return !!(control && control.invalid && (control.touched));
  }
}