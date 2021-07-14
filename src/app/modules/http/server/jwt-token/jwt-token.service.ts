import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {
  token="";
  constructor(private _http:HttpClient) { }

  login(data:any){
    return this._http.post('http://localhost:3000/login',data)
  }

  tokenValidationApi(){
    
    let haders= new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })

    return this._http.get('http://localhost:3000/me', {headers:haders} )
  }

}
