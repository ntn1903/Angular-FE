import { Component, OnInit } from '@angular/core';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger40ms } from 'src/@vex/animations/stagger.animation';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { Category } from 'src/app/models/category/category.model';
import { CategoryApiService } from './category-api.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupCreateUpdateCategoryComponent } from './popup-create-update-category/popup-create-update-category.component';
import { BaseService } from 'src/app/base/base.service';

@Component({
  selector: 'vex-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  animations: [fadeInUp400ms, stagger40ms],
})
export class CategoryComponent extends BaseService implements OnInit {
  columns: TableColumn<Category>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Id', property: 'id', type: 'number', visible: true, },
    { label: 'Name', property: 'name', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Description', property: 'description', type: 'text', visible: true },
    { label: 'Created At', property: 'createdAt', type: 'datetime', visible: true },
    { label: 'Creator Id', property: 'creatorId', type: 'text', visible: false },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];

  categories: Category[] = [];
  constructor(
    private dialog: MatDialog,
    private categoryApiService: CategoryApiService
  ) {
    super();
  }

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.categoryApiService.getList({ id: 0, name: '' }).subscribe(response => {
      this.categories = response.data;
    })
  }

  onCreateUpdateCategory(category?: Category) {
    this.dialog.open(PopupCreateUpdateCategoryComponent,
      {
        data: this.isUndefined(category) ? { id: 0 } : category
      }).afterClosed().subscribe(updatedCategory => {
        if (updatedCategory) {
          this.loadData();
        }
      });
  }
}
