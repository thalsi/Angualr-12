import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private _http:HttpClient) { }

  psot(){
    return this._http.post('https://angular-9a015-default-rtdb.firebaseio.com/psot.json',{username:'thalsi',password:'passw'})
  }
}
