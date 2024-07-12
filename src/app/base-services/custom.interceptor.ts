// import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// export class CustomInterceptor implements HttpInterceptor {
//   intercept(req: HttpRequest<any>, next): Observable<HttpEvent<any>> {
//     const localToken: string = localStorage.getItem('token') ?? '';
//     const helper = new JwtHelperService();

//     const decodedToken = helper.decodeToken(localToken);
//     const expirationDate = helper.getTokenExpirationDate(localToken);
//     const isExpired = helper.isTokenExpired(localToken);

//     if (isExpired || localToken == '') {
//       localStorage.clear();
//     }

//     const cloneRequest = req.clone({ setHeaders: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
//     // return next(cloneRequest);
//     return next(cloneRequest).pipe(
//       catchError((err: any) => {
//         if (err instanceof HttpErrorResponse) {
//           console.log('err', err.status);
//           if (err.status === 401) {
//             window.location.replace('http://localhost:4200/login');
//           }
//           if (err.status === 0) {
//             window.location.replace('http://localhost:4200/404');
//           }
//         }
//         return throwError('a');
//       })
//     );
//   }

// }


// // @Injectable()
// // export class LoaderInterceptor implements HttpInterceptor {
// //   localToken: string = localStorage.getItem('token') ?? '';

// //   constructor(private loaderService: LoaderService, private router: Router) { }
// //   intercept(
// //     request: HttpRequest<any>,
// //     next: HttpHandler
// //   ): Observable<HttpEvent<any>> {
// //     this.loaderService.showLoader();
// //     // this.localToken = localStorage.getItem('token') ?? '';

// //     const cloneReq = request.clone({
// //       headers: request.headers.set('Bearer', this.localToken)
// //     });
// //     return next.handle(cloneReq).pipe(
// //       finalize(() => this.loaderService.hideLoader()),
// //       catchError((err: HttpErrorResponse) => {
// //         this.router.navigate(['/login'], { skipLocationChange: true });
// //         return throwError(err);
// //       })
// //     );
// //   }
// // }

