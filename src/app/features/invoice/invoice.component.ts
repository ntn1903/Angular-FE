import { Component, OnInit } from '@angular/core';
import { fadeInUp400ms } from '../../../@vex/animations/fade-in-up.animation';
import { BaseService } from 'src/app/base/base.service';

@Component({
  selector: 'vex-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
  animations: [
    fadeInUp400ms
  ]
})
export class InvoiceComponent extends BaseService implements OnInit {

  constructor() { super(); }

  ngOnInit() {
  }

}
