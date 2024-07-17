import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseService } from 'src/app/base-services/base.service';
import { ProductCreateUpdateComponent } from 'src/app/features/product/product-create-update/product-create-update.component';
import { Product } from 'src/app/features/product/product.component';

@Component({
  selector: 'vex-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent extends BaseService implements OnInit {
  static id = 100;

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<ProductCreateUpdateComponent>,
    private fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Product;
    }

    this.form = this.fb.group({
      id: [ProductCreateUpdateComponent.id++],
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

    // if (!product.imageSrc) {
    //   product.imageSrc = 'assets/images/1.jpg';
    // }

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
