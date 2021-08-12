import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private _http:HttpClient
  ) { }

  getList():Observable<any>{
    return this._http.get<any>('http://localhost:3000/user').pipe(map(res=>{
      return res;
    }))
  }

  add(data:any):Observable<any>{
    return this._http.post<any>('http://localhost:3000/user/add',data).pipe(map(res=>{
      return res;
    }))
  }

  update(data:any):Observable<any>{
    return this._http.put<any>('http://localhost:3000/user/update',data).pipe(map(res=>{
      return res;
    }))
  }

  delete(id:number):Observable<any>{
    return this._http.delete<any>('http://localhost:3000/user/delete/'+id).pipe(map(res=>{
      return res;
    }))
  }


}
