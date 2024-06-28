import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
//import Cookies from 'cookies-js';
import { CookieService } from 'ngx-cookie-service';
 
export class AuthInterceptor implements HttpInterceptor {
 
cookieService: CookieService =  inject(CookieService);
   
//   setCookie(){
//     this.cookieService.set('.AspNetCore.Identity.Application',document.cookie);
//   }
 
  getCookie(){
    return this.cookieService.get('.AspNetCore.Identity.Application');
  }
 
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // this.setCookie();
    console.log(this.getCookie());
   // console.log(document.cookie)
    request = request.clone({
      withCredentials: true
  });
  return next.handle(request);
  }
}