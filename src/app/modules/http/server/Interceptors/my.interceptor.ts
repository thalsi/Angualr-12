import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, finalize } from 'rxjs/operators';

@Injectable()
export class MyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const  requst_started = Date.now();
    console.log('<-------MyInterceptor working------->');
    console.log(request);

    const req=request.clone({
      // url: environment.apiBasePath+request.url
    });
    return next.handle(req).pipe(
      catchError((error:HttpErrorResponse) =>{
        console.log('<---gobal catch error !---->');
          console.log(error);
          
        throw error;
      }),
      finalize(()=>{
        const responed_end = Date.now() - requst_started;
        console.log("time caluate requset repsone: "+responed_end);
        
      })
    );
  }
}
