import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { aioTableLabels } from 'src/static-data/aio-table-data';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger40ms } from 'src/@vex/animations/stagger.animation';
import { ProductCreateUpdateComponent } from './product-create-update/product-create-update.component';
import { BaseService } from 'src/app/base/base.service';
import { DatePipe } from '@angular/common';
import { FileAttachmentApiService } from '../file-attachment/file-attachment-api.service';
import { ProductApiService } from './product-api.service';
import { ResponseModel } from 'src/app/models/response-model.model';
import { Product } from 'src/app/models/product/product.model';

@Component({
  selector: 'vex-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [fadeInUp400ms, stagger40ms],
  providers: [DatePipe]
})
export class ProductComponent extends BaseService implements OnInit {
  products: Product[];
  columns: TableColumn<Product>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Id', property: 'id', type: 'number', visible: true, },
    { label: 'Name', property: 'name', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Category', property: 'categoryName', type: 'text', visible: true },
    { label: 'Supplier', property: 'supplierName', type: 'text', visible: true },
    // { label: 'Unit', property: 'unit', type: 'text', visible: true },
    { label: 'Quantity', property: 'quantity', type: 'number', visible: true },
    { label: 'Price', property: 'price', type: 'currency', visible: true },
    // { label: 'Status', property: 'status', type: 'badge', visible: true },
    { label: 'Description', property: 'description', type: 'text', visible: true },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];

  constructor(
    private dialog: MatDialog,
    private datePipe: DatePipe,
    private fileAttachmentApiService: FileAttachmentApiService,
    private productApi: ProductApiService,
  ) {
    super();
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  loadData() {
    this.productApi.getList({ id: 0, name: '' }).subscribe((res: ResponseModel) => {
      this.products = res.data;
    })
  }

  ngOnInit() {
    this.loadData();
  }
  onCreateUpdateProduct(prod?: Product) {
    this.dialog.open(ProductCreateUpdateComponent,
      {
        data: this.isUndefined(prod) ? {} : prod,
        autoFocus: false,
        width: '30%'
      }
    ).afterClosed().subscribe(updatedProd => {
      if (updatedProd) { this.loadData(); }
    });
  }
  onDeleteProduct(prod: Product) {
    this.productApi.delete(prod.id).subscribe(res => {
      this.loadData();
    });
  }

  onDeleteProducts(prods: Product[]) {
    let listId = [];
    prods.forEach(m => listId.push(m.id))

    this.productApi.deleteMany(listId).subscribe(_ => this.loadData());
  }
}