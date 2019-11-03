import { Router } from '@angular/router';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {

constructor(private router: Router){}

intercept(req: HttpRequest<any>, next: HttpHandler,): Observable<HttpEvent<any>> {

//como a app nao tem consumo de backend, coloquei um valor aleatorio no Bearer
const dupReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + '1235643')});

 return next.handle(dupReq).pipe(
  map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
          console.log('sucesso', event);
      }
      return event;
  }),catchError((error: HttpErrorResponse) => {
    if(error.status === 401) {
      this.router.navigate(['']);
      console.log('', 'Sessão expirada.');
    }
    console.log('erro',error);
    return throwError(error);
}));

}

}

@NgModule({
providers: [
 {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpsRequestInterceptor,
  multi: true,
 },
],
})


export class InterceptorModule {}