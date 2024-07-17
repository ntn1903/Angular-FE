import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { SelectionModel } from '@angular/cdk/collections';
import { AppConsts } from 'src/app/base-services/app.contanst';
import { BaseService } from 'src/app/base-services/base.service';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { Product } from 'src/app/features/product/product.component';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger40ms } from 'src/@vex/animations/stagger.animation';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'wms-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [fadeInUp400ms, stagger40ms],
})
export class TableComponent extends BaseService implements AfterViewInit, OnChanges {
  @Input() columns: TableColumn<any>[] = [];
  @Input() data: any[] = [];
  @Input() isShowFilterColumns: boolean = true;

  @Output() onCreate = new EventEmitter<any>();
  @Output() onUpdate = new EventEmitter<any>();
  @Output() onDetail = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource: MatTableDataSource<any>;
  searchValue: string = "";

  PAGE_SIZE_DEFAULT: number = AppConsts.PAGE_SIZE_DEFAULT;
  PAGE_SIZE_OPTIONS: number[] = [5, 10, 25, 100];

  layoutCtrl = new FormControl('boxed'); //fullwidth

  constructor(private dialog: MatDialog) {
    super();
    this.dataSource = new MatTableDataSource(this.data as any[]);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.dataSource = new MatTableDataSource(this.data as any[]);
    }
  }

  loadData(loading: boolean) {
    if (!loading) return;

    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = this.searchValue;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  selection = new SelectionModel<any>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: any): string {
    if (!row)
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;

    return `${this.selection.isSelected(row) ? 'deselect' : 'select'}`;
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible ?? true).map(column => column.property);
  }

  trackByProperty<T>(index: number, column: TableColumn<T>) {
    return column.property;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  onLabelChange(change: MatSelectChange, row: Product) {
    // const index = this.products.findIndex(c => c === row);
    // this.products[index].labels = change.value;
    // this.subject$.next(this.products);
  }


  /////////////////////////////////////
  handleOnUpdate(data: any) {
    this.onUpdate.emit(JSON.parse(JSON.stringify(data)));
  }
  handleOnDetail(data: any) {
    this.onDetail.emit(JSON.parse(JSON.stringify(data)));
  }
  handleOnDelete(data: any) {
    this.dialog.open(DialogConfirmComponent, {
      data: "Do you want to delete this record?"
    }).afterClosed().subscribe((res: any) => {
      if (res === 'Y')
        this.onDelete.emit(JSON.parse(JSON.stringify(data)))
    });
  }
}