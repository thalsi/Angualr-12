import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
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
      .get<User[]>('get',{ params: this.params , headers: this.headers })
      .pipe(
          map((res:User[])=>{
          return res;
        })
      );
  }

  postApi(data:User){
    return this._http.post('post',data)
    .pipe(
      map((res)=> {return res}),
      catchError(err=>{
        throw 'server side get error'
      })
    )
  }

  putApi(data:User,id:number){
    return this._http.put(`put/${id}`,data)
  }

  deleteApi(id:number){
    return this._http.delete(`delete/${id}`)
  }

  getEevent(){
    const req= new HttpRequest('GET',"https://jsonplaceholder.typicode.com/photos",{ reportProgress: true})
    return this._http.request(req).pipe(
      map((res:any)=>{
        return res;
      })
    )
  }
}
