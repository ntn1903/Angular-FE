import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/base-services/base.service';

@Component({
  selector: 'vex-widget-assistant',
  templateUrl: './widget-assistant.component.html',
  styleUrls: ['./widget-assistant.component.scss']
})
export class WidgetAssistantComponent extends BaseService implements OnInit {
  constructor() { super(); }

  ngOnInit() { }

}
