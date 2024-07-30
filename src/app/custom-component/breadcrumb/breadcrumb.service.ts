import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Data, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Breadcrumb } from 'src/app/models/breadcrumb.model';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private readonly _breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);
  readonly breadcrumbs$ = this._breadcrumbs$.asObservable();
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.rootRoute(this.route)),
      filter((route: ActivatedRoute) => route.outlet === 'primary'),
    ).subscribe(event => {
      // console.log(event)
      // console.log(event.snapshot['_routerState']);
      // console.log(event.data['_value']['breadcrumb']);
      const root = this.router.routerState.snapshot.root;

      const breadcrumbs: Breadcrumb[] = [];

      this.addBreadcrumb(root, [], breadcrumbs);
      this._breadcrumbs$.next(breadcrumbs);
    });
  }

  private rootRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

  private addBreadcrumb(route: ActivatedRouteSnapshot, parentUrl: string[], breadcrumbs: Breadcrumb[]) {
    if (route) {
      const routeUrl = parentUrl.concat(route.url.map(url => url.path));

      if (route.data.breadcrumb) {
        const breadcrumb = {
          label: this.getLabel(route.data),
          url: '/' + routeUrl.join('/')
        };
        breadcrumbs.push(breadcrumb);
      }

      this.addBreadcrumb(route.firstChild, routeUrl, breadcrumbs);
    }
  }

  private getLabel(data: Data) {
    return typeof data.breadcrumb === 'function' ? data.breadcrumb(data) : data.breadcrumb;
  }
}
