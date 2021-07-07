import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmitService {
    data:any=new Subject;

  constructor(private _http:HttpClient) { }

  activeMe(v:any){
    this.data.next(v);
  }


  getdata(){
    console.log('hi http call..');
    
    return this._http.get('https://jsonplaceholder.typicode.com/posts')
  }

}

export interface List{
  title:string;
  id:number;
}