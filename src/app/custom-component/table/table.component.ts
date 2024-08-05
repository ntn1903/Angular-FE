import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { SelectionModel } from '@angular/cdk/collections';
import { AppConsts } from 'src/app/base/app.contanst';
import { BaseService } from 'src/app/base/base.service';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
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
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'standard'
      } as MatFormFieldDefaultOptions
    }
  ]
})
export class TableComponent extends BaseService implements OnInit, AfterViewInit, OnChanges {
  @Input() columns: TableColumn<any>[] = [];
  @Input() data: any[] = [];

  @Input() isShowFilterColumns: boolean = true;
  @Input() isShowSearch: boolean = true;
  @Input() isShowResize: boolean = true;
  @Input() isShowUpload: boolean = true;
  @Input() isShowExport: boolean = true;
  @Input() isShowCreate: boolean = true;

  @Input() isActionView: boolean = true;
  @Input() isActionEdit: boolean = true;
  @Input() isActionDelete: boolean = true;

  @Input() acceptType: string = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel';

  @Output() onCreate = new EventEmitter<any>();
  @Output() onUpdate = new EventEmitter<any>();
  @Output() onDetail = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onUpload = new EventEmitter<any>();
  @Output() onExport = new EventEmitter<any>();
  @Output() onDeleteSelected = new EventEmitter<any>();


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource: MatTableDataSource<any>;
  searchValue: string = "";

  PAGE_SIZE_DEFAULT: number = AppConsts.PAGE_SIZE_DEFAULT;
  PAGE_SIZE_OPTIONS: number[] = [1, 5, 10, 25, 100];

  layoutCtrl = new FormControl('boxed'); //fullwidth

  constructor(private dialog: MatDialog) {
    super();
  }


  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.dataSource = new MatTableDataSource(this.data as any[]);
      this.dataSource.paginator = this.paginator;
      this.selection.clear();
    }
  }

  loadData(loading: boolean) {
    if (!loading) return;

    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 100);
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

  // onLabelChange(change: MatSelectChange, row: Product) {
  //   // const index = this.products.findIndex(c => c === row);
  //   // this.products[index].labels = change.value;
  //   // this.subject$.next(this.products);
  // }


  /////////////////////////////////////
  handleOnDelete(data: any) {
    this.dialog.open(DialogConfirmComponent, {
      data: "Do you want to delete this record?",
      autoFocus: false,
    }).afterClosed().subscribe((res: any) => {
      if (res === 'Y')
        this.onDelete.emit(JSON.parse(JSON.stringify(data)))
    });
  }

  handleOnDeleteSelected(data: any[]) {
    this.dialog.open(DialogConfirmComponent, {
      data: `Do you want to delete ${data.length} ${data.length < 2 ? 'record' : 'records'}?`,
      autoFocus: false,
    }).afterClosed().subscribe((res: any) => {
      if (res === 'Y') {
        this.onDeleteSelected.emit(JSON.parse(JSON.stringify(data)))
        this.selection.clear();
      }
    });
  }
}