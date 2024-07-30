import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wms-breadcrumb',
  template: `
      <ng-content></ng-content>
  `,
  styles: [],
  host: {
    class: 'wms-breadcrumb body-2 text-hint leading-none hover:text-primary no-underline trans-ease-out ltr:mr-2 rtl:ml-2'
  }
})
export class BreadcrumbCustomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
