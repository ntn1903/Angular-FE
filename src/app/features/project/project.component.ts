import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableColumn } from 'src/@vex/interfaces/table-column.interface';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger40ms } from 'src/@vex/animations/stagger.animation';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { BaseService } from 'src/app/base-services/base.service';
import { PopupCreateUpdateProjectComponent } from './popup-create-update-project/popup-create-update-project.component';

@Component({
  selector: 'vex-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [fadeInUp400ms, stagger40ms],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'standard' } as MatFormFieldDefaultOptions
    }
  ]
})
export class ProjectComponent extends BaseService implements OnInit, AfterViewInit {
  projects: Project[] = [
    { id: 1, name: 'Ms X', address: 'HCM', phone: '0911915197' },
    { id: 2, name: 'Mr Y', address: 'HCM', phone: '0911915197' },
    { id: 3, name: 'Mrs. Z', address: 'HCM', phone: '0911915197' },
    { id: 4, name: 'Ms X', address: 'HCM', phone: '0911915197' },
    { id: 5, name: 'Mr Y', address: 'HCM', phone: '0911915197' },
    { id: 6, name: 'Mrs. Z', address: 'HCM', phone: '0911915197' },
  ];

  columns: TableColumn<Project>[] = [
    { label: 'Checkbox', property: 'checkbox', type: 'checkbox', visible: true },
    { label: 'Id', property: 'id', type: 'number', visible: true, },
    { label: 'Name', property: 'name', type: 'text', visible: true, cssClasses: ['font-medium'] },
    { label: 'Phone', property: 'phone', type: 'text', visible: true },
    { label: 'Address', property: 'address', type: 'number', visible: true },
    { label: 'Actions', property: 'actions', type: 'button', visible: true }
  ];

  constructor(private dialog: MatDialog) {
    super();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  onCreate() {
    this.dialog.open(PopupCreateUpdateProjectComponent).afterClosed().subscribe((product: Project) => {

    });
  }

  onUpdate(project: Project) {
    this.dialog.open(PopupCreateUpdateProjectComponent, {
      data: project,
    }).afterClosed().subscribe((product: Project) => {

    });
    // this.dialog.open(PopupCreateUpdateProjectComponent, {
    //   data: project,
    // }).afterClosed().subscribe(updatedProduct => {
    //   // if (updatedProduct) {
    //   //   const index = this.projects.findIndex((existingCustomer) => existingCustomer.id === updatedProduct.id);
    //   //   this.projects[index] = new Product(updatedProduct);
    //   //   this.subject$.next(this.projects);
    //   // }
    // });
  }
  onDetail(project: Project) {
    console.log(project)
    // this.dialog.open(PopupCreateUpdateProjectComponent, {
    //   data: project,
    // }).afterClosed().subscribe(updatedProduct => {
    //   // if (updatedProduct) {
    //   //   const index = this.projects.findIndex((existingCustomer) => existingCustomer.id === updatedProduct.id);
    //   //   this.projects[index] = new Product(updatedProduct);
    //   //   this.subject$.next(this.projects);
    //   // }
    // });
  }
  onDelete(project: Project) {
    this.projects = this.projects.filter(m => m.id != project.id);
  }
}

export class Project {
  id: number;
  name: string;
  address: string;
  phone: string | number;

  constructor(project) {
    this.id = project.id;
    this.name = project.name;
    this.address = project.address
    this.phone = project.phone;
  }
}
