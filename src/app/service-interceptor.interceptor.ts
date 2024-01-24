import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
 export class ServiceInterceptorInterceptor implements HttpInterceptor {

  constructor(private router:Router) {}


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
     console.log(request,"Request");
    // console.log(next,"Next")
    const jwt = localStorage.getItem("Auth-Token");
    return next.handle(request.clone({ setHeaders: { authorization: `Bearer ${jwt}`  }})).pipe(
      tap({
        next: (event) => {
          if(event instanceof HttpResponse){
            if(event.status == 401){
              // alert('Unauthorize')
              this.router.navigate(['auth/login'])
            }
          }
          return event;
        },
        error: (error) => {
          if(error.status === 401) {
            this.router.navigate([''])
          }
          else if(error.status === 404) {
            alert('Page Not Found!')
          }
        }
      })
    )
  }  
}

// export class CustomInterceptor implements HttpInterceptor { 
    
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
//       request = request.clone({
//           withCredentials: true
//       });
  
//       return next.handle(request);
//   }
// }