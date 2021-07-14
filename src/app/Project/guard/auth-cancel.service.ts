import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthCancelService implements CanActivate{

  constructor(private _router:Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    
    if(!localStorage.getItem('Token')){
      return of(true)
    }else{
      this._router.navigateByUrl('/home');
      return of(false)
    }
  }
}
