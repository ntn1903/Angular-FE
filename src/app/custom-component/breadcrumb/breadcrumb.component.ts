import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Breadcrumb } from 'src/app/models/breadcrumb.model';
import { BreadcrumbService } from './breadcrumb.service';
import { BaseService } from 'src/app/base/base.service';
import { trackByValue } from 'src/@vex/utils/track-by';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent extends BaseService {

  breadcrumbs$: Observable<Breadcrumb[]>;
  trackByValue = trackByValue;
  constructor(private readonly breadcrumbService: BreadcrumbService) {
    super();
    this.breadcrumbs$ = breadcrumbService.breadcrumbs$;
  }

}
