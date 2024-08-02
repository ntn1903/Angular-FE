import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { BaseService } from './base.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export class CustomInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const localToken: string = localStorage.getItem('token');

    // if (req.url.includes('token')) {
    //     /** hide message when login with method post */
    //     return next.handle(req);
    // }

    // if (req.method)
    //     return next.handle(req).pipe(
    //         catchError(error => {
    //             if (error instanceof HttpErrorResponse && error.status === 0) { //&& error.url.endsWith('/api/abp/application-configuration')
    //                 // // Reload page
    //                 // setTimeout(() =>  window.location.reload() , 5000)                        
    //             }

    //             if (error instanceof HttpErrorResponse)
    //                 switch (error.status) {
    //                     case 404: case 403: case 500:
    //                         this.snackbar.open(error.status.toString(), 'X', { duration: 3000 });
    //                         break;
    //                     default:
    //                         console.error(error);
    //                 }

    //             return throwError(error);
    //         }),
    //         tap((event: HttpEvent<any>) => {
    //             if (req.method.toLowerCase() !== 'get') {
    //                 if (event.type !== 0)
    //                     if (event instanceof HttpResponse) {
    //                         const isResponseMessageInBody = event.body && typeof event.body === 'object' && 'message' in event.body;
    //                         if ((event.status > 199 || event.status < 300) && !isResponseMessageInBody)
    //                             this.snackbar.open('Success', 'X', { duration: 3000 });
    //                     }
    //                     else this.snackbar.open('Failed', 'X', { duration: 3000 });
    //             }
    //         })
    //     );

    // const helper = new JwtHelperService();

    // const decodedToken = helper.decodeToken(localToken);
    // const expirationDate = helper.getTokenExpirationDate(localToken);
    // const isExpired = helper.isTokenExpired(localToken);

    // if (isExpired || localToken == '') {
    //     localStorage.clear();
    // }

    const cloneRequest = req.clone({ setHeaders: { Authorization: `Bearer ${localToken}` } });
    // const cloneRequest = req.clone({ headers: req.headers.set('Authorization', `Bearer ${localToken}`) });
    // return next.handle(cloneRequest);
    return next.handle(cloneRequest).pipe(
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          console.log('err', err.status);
          if (err.status === 401) {
            window.location.replace('http://localhost:4200/login');
          }
          if (err.status === 0) {
            window.location.replace('http://localhost:4200/404');
          }
        }
        return throwError('a');
      })
    );
  }
}


// @Injectable()
// export class LoaderInterceptor implements HttpInterceptor {
//   localToken: string = localStorage.getItem('token') ?? '';

//   constructor(private loaderService: LoaderService, private router: Router) { }
//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     this.loaderService.showLoader();
//     // this.localToken = localStorage.getItem('token') ?? '';

//     const cloneReq = request.clone({
//       headers: request.headers.set('Bearer', this.localToken)
//     });
//     return next.handle(cloneReq).pipe(
//       finalize(() => this.loaderService.hideLoader()),
//       catchError((err: HttpErrorResponse) => {
//         this.router.navigate(['/login'], { skipLocationChange: true });
//         return throwError(err);
//       })
//     );
//   }
// }

