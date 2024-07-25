import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseService } from 'src/app/base/base.service';
import { Project } from '../project.component';

@Component({
  selector: 'vex-popup-create-update-project',
  templateUrl: './popup-create-update-project.component.html',
  styleUrls: ['./popup-create-update-project.component.scss']
})
export class PopupCreateUpdateProjectComponent extends BaseService implements OnInit {
  static id = 100;

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<PopupCreateUpdateProjectComponent>,
    private fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Project;
    }

    this.form = this.fb.group({
      id: [PopupCreateUpdateProjectComponent.id++],
      name: this.defaults.name || '',
      unit: this.defaults.unit || '',
      quantity: this.defaults.quantity || '',
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createProduct();
    } else if (this.mode === 'update') {
      this.updateProduct();
    }
  }

  createProduct() {
    const product = this.form.value;
    this.dialogRef.close(product);
  }

  updateProduct() {
    const product = this.form.value;
    product.id = this.defaults.id;

    this.dialogRef.close(product);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
