import { Component, ElementRef, forwardRef, HostBinding, HostListener, Injector, Input, OnDestroy } from "@angular/core";
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from "@angular/forms";
import { MatFormFieldControl } from "@angular/material/form-field";
import { Observable, Subject } from "rxjs";

@Component({
    selector: 'master',
    template: `
        <div>This is Base</div>`,
    providers: [
        {
            provide: MatFormFieldControl,
            useExisting: BaseControl,
            multi: true
        },
        {
            provide: NG_VALUE_ACCESSOR, 
            useExisting: forwardRef(() => BaseControl),
            multi: true
        }
    ]
})
export class BaseControl implements MatFormFieldControl<any>, ControlValueAccessor, OnDestroy {
    private _value: any;
    set value(value: any) {
        if (this._value != value) {
            this._value = value;
            this.notifyValueChange();
            this.stateChanges.next(value);
        }
    }
    get value() { return this._value }
    
    onChange: (value: any) => {};
    onTouched: () => {};
    notifyValueChange(): void { if (this.onChange) { this.onChange(this.value); } }
    writeValue(obj: any): void { this._value = obj; }
    registerOnChange(fn: any): void { this.onChange = fn; }
    registerOnTouched(fn: any): void { this.onTouched = fn; }
    setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }
    stateChanges = new Subject<void>();
    id: string;
    @Input() placeholder: string;
    ngControl: NgControl;
    focused: boolean;
    get empty() { return !this.value; }
    @HostBinding('class.floating')
    get shouldLabelFloat() { return this.focused || !this.empty; }

    @Input() required: boolean;
    @Input() disabled: boolean;
    errorState: boolean;
    controlType?: string;
    autofilled?: boolean;
    userAriaDescribedBy?: string;

    __elementRef: ElementRef
    constructor(private __injec: Injector) { this.__elementRef = __injec.get(ElementRef) }

    setDescribedByIds(ids: string[]): void { }
    onContainerClick(event: MouseEvent): void { }
    @HostListener('focusin')
    onFocusIn(event: FocusEvent) { if (!this.focused) { this.focused = true; } }
    onFocusOut(event: FocusEvent) {
        if (!this.__elementRef.nativeElement.contains(event.relatedTarget as Element)) { this.focused = false; }
    }
    ngOnDestroy(): void { this.stateChanges.complete() }
}