import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../../model/User';

@Injectable({
  providedIn: 'root'
})
export class ServerService {


  constructor(private _http:HttpClient) { }

  // parms
  params= new HttpParams()
    .set("sort",'name')
    .set("Oder-by",'id')
    .set("page",'3');

  //Hader
  headers =new HttpHeaders()
    .set('Content-Type', 'application/json');   

  getApi():Observable<User[]>{
    return this._http
      .get<User[]>('http://localhost:3000/get',{ params: this.params , headers: this.headers })
      .pipe(
          map((res:User[])=>{
          return res;
        })
      );
  }

  postApi(data:User){
    return this._http.post('http://localhost:3000/post',data)
    .pipe(
      map((res)=> {return res}),
      catchError(err=>{
        throw 'server side get error'
      })
    )
  }

  putApi(data:User,id:number){
    return this._http.put(`http://localhost:3000/put/${id}`,data)
  }

  deleteApi(id:number){
    return this._http.delete(`http://localhost:3000/delete/${id}`)
  }
}
