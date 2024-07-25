import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base/base.service';

@Component({
  selector: 'vex-widget-assistant',
  templateUrl: './widget-assistant.component.html',
  styleUrls: ['./widget-assistant.component.scss']
})
export class WidgetAssistantComponent extends BaseService implements OnInit {
  currentUser = localStorage.getItem('currentUser');
  constructor() { super(); }

  ngOnInit() { }

}
