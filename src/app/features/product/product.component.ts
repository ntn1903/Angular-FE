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
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { ProductCreateUpdateComponent } from './product-create-update/product-create-update.component';
import { BaseService } from 'src/app/base-services/base.service';

@Component({
  selector: 'vex-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger40ms
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'standard'
      } as MatFormFieldDefaultOptions
    }
  ]
})
export class ProductComponent extends BaseService implements OnInit, AfterViewInit {
  layoutCtrl = new FormControl('boxed');
  subject$: ReplaySubject<Product[]> = new ReplaySubject<Product[]>(1);
  data$: Observable<Product[]> = this.subject$.asObservable();
  products: Product[];

  @Input()
  columns: TableColumn<Product>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Id', property: 'id', type: 'number', visible: true, },
    { label: 'Name', property: 'name', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Unit', property: 'unit', type: 'text', visible: true },
    { label: 'Quantity', property: 'quantity', type: 'number', visible: true },
    { label: 'Status', property: 'status', type: 'badge', visible: true },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 20, 50];
  dataSource: MatTableDataSource<Product> | null;
  selection = new SelectionModel<Product>(true, []);
  searchCtrl = new FormControl();

  labels = aioTableLabels;

 

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dialog: MatDialog) {
    super();
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  getData() {
    return of(productTableData.map(product => new Product(product)));
  }

  ngOnInit() {
    this.getData().subscribe(products => {
      this.subject$.next(products);
    });

    this.dataSource = new MatTableDataSource();

    this.data$.pipe(
      filter<Product[]>(Boolean)
    ).subscribe(products => {
      this.products = products;
      this.dataSource.data = products;
    });

    this.searchCtrl.valueChanges.pipe(
      // untilDestroyed(this)
    ).subscribe(value => this.onFilterChange(value));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createProduct() {
    this.dialog.open(ProductCreateUpdateComponent).afterClosed().subscribe((product: Product) => {
      if (product) {
        this.products.unshift(new Product(product));
        this.subject$.next(this.products);
      }
    });
  }

  updateProduct(prod: Product) {
    this.dialog.open(ProductCreateUpdateComponent, {
      data: prod,
    }).afterClosed().subscribe(updatedProduct => {
      if (updatedProduct) {
        const index = this.products.findIndex((existingCustomer) => existingCustomer.id === updatedProduct.id);
        this.products[index] = new Product(updatedProduct);
        this.subject$.next(this.products);
      }
    });
  }

  deleteProduct(product: Product) {
    this.products.splice(this.products.findIndex((existingProduct) => existingProduct.id === product.id), 1);
    this.selection.deselect(product);
    this.subject$.next(this.products);
  }

  deleteProducts(products: Product[]) {
    products.forEach(c => this.deleteProduct(c));
  }

  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  trackByProperty<T>(index: number, column: TableColumn<T>) {
    return column.property;
  }

  onLabelChange(change: MatSelectChange, row: Product) {
    const index = this.products.findIndex(c => c === row);
    this.products[index].labels = change.value;
    this.subject$.next(this.products);
  }
}

export const productTableData = [
  {
    id: 0,
    name: 'Gỗ',
    unit: 'Miếng',
    quantity: 20,
    status: 'ready',
  },
  {
    id: 1,
    name: 'Sắt',
    unit: 'Miếng',
    quantity: 30,
    status: 'pending',
  },
  {
    id: 2,
    name: 'PDF',
    unit: 'Miếng',
    quantity: 40,
    status: 'warn',
  },
  {
    id: 4,
    name: 'Gỗ',
    unit: 'Miếng',
    quantity: 20,
    status: 'ready',
  },
  {
    id: 5,
    name: 'Sắt',
    unit: 'Miếng',
    quantity: 30,
    status: 'pending',
  },
  {
    id: 6,
    name: 'PDF',
    unit: 'Miếng',
    quantity: 40,
    status: 'warn',
  },
  {
    id: 7,
    name: 'Gỗ',
    unit: 'Miếng',
    quantity: 20,
    status: 'ready',
  },
  {
    id: 8,
    name: 'Sắt',
    unit: 'Miếng',
    quantity: 30,
    status: 'pending',
  },
  {
    id: 9,
    name: 'PDF',
    unit: 'Miếng',
    quantity: 40,
    status: 'warn',
  },
  {
    id: 10,
    name: 'Gỗ',
    unit: 'Miếng',
    quantity: 20,
    status: 'ready',
  },
  {
    id: 11,
    name: 'Sắt',
    unit: 'Miếng',
    quantity: 30,
    status: 'pending',
  },
  {
    id: 12,
    name: 'PDF',
    unit: 'Miếng',
    quantity: 40,
    status: 'warn',
  },
  {
    id: 13,
    name: 'Gỗ',
    unit: 'Miếng',
    quantity: 20,
    status: 'ready',
  },
  {
    id: 14,
    name: 'Sắt',
    unit: 'Miếng',
    quantity: 30,
    status: 'pending',
  },
  {
    id: 15,
    name: 'PDF',
    unit: 'Miếng',
    quantity: 40,
    status: 'warn',
  },
  {
    id: 16,
    name: 'Gỗ',
    unit: 'Miếng',
    quantity: 20,
    status: 'ready',
  },
  {
    id: 17,
    name: 'Sắt',
    unit: 'Miếng',
    quantity: 30,
    status: 'pending',
  },
  {
    id: 18,
    name: 'PDF',
    unit: 'Miếng',
    quantity: 40,
    status: 'warn',
  },
  {
    id: 19,
    name: 'Gỗ',
    unit: 'Miếng',
    quantity: 20,
    status: 'ready',
  },
  {
    id: 20,
    name: 'Sắt',
    unit: 'Miếng',
    quantity: 30,
    status: 'pending',
  },
  {
    id: 21,
    name: 'PDF',
    unit: 'Miếng',
    quantity: 40,
    status: 'warn',
  },
  {
    id: 22,
    name: 'Gỗ',
    unit: 'Miếng',
    quantity: 20,
    status: 'ready',
  },
  {
    id: 23,
    name: 'Sắt',
    unit: 'Miếng',
    quantity: 30,
    status: 'pending',
  },
  {
    id: 24,
    name: 'PDF',
    unit: 'Miếng',
    quantity: 40,
    status: 'warn',
  },
  {
    id: 25,
    name: 'Gỗ',
    unit: 'Miếng',
    quantity: 20,
    status: 'ready',
  },
  {
    id: 26,
    name: 'Sắt',
    unit: 'Miếng',
    quantity: 30,
    status: 'pending',
  },
  {
    id: 27,
    name: 'PDF',
    unit: 'Miếng',
    quantity: 40,
    status: 'warn',
  },
  {
    id: 28,
    name: 'Gỗ',
    unit: 'Miếng',
    quantity: 20,
    status: 'ready',
  },
  {
    id: 29,
    name: 'Sắt',
    unit: 'Miếng',
    quantity: 30,
    status: 'pending',
  },
  {
    id: 30,
    name: 'PDF',
    unit: 'Miếng',
    quantity: 40,
    status: 'warn',
  },
]

export class Product {
  id: number;
  name: string;
  unit: string;
  quantity: number;
  labels: any;
  status: 'ready' | 'pending' | 'warn';

  constructor(product) {
    this.id = product.id;
    this.name = product.name;
    this.unit = product.unit;
    this.quantity = product.quantity;
    this.labels = product.labels;
    this.status = product.status;
  }

  // get name() {
  //   let name = '';
  //   if (this.firstName && this.lastName) {
  //     name = this.firstName + ' ' + this.lastName;
  //   } else if (this.firstName) {
  //     name = this.firstName;
  //   } else if (this.lastName) {
  //     name = this.lastName;
  //   }

  //   return name;
  // }
  // get address() {
  //   return `${this.street}, ${this.zipcode} ${this.city}`;
  // }

}

