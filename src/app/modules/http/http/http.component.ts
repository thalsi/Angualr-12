import { HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../model/User';
import { JwtTokenService } from '../server/jwt-token/jwt-token.service';
import { ServerService } from '../server/noraml/server.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  form:any;
  user:User[]=[];
  eorr:any;

  loginForm:any;

  constructor(
    private _server:ServerService,
    private _jwt:JwtTokenService
    ) { }

  ngOnInit(): void {

    this.form= new FormGroup({
      email:new FormControl(''),
      first_name:new FormControl(''),
      last_name:new FormControl(''),
      gender:new FormControl(''),
    })

    this.loginForm= new FormGroup({
      username:new FormControl(''),
      password:new FormControl('')
    })

  }

  getRequest(){
    this._server.getApi().subscribe((res:User[])=>{
      console.log(res);
      this.user=res;
    })
  }

  postrequst(){
    this._server.postApi(this.form.value).subscribe(res=>{
      console.log(res);
    },(error:HttpErrorResponse)=>{

      if(error.status==422){
        this.eorr=error;
        console.log('----');
        console.log(error);
        
      }
 
      console.log('error chatch in commopnt');
      
      console.log(error);
    })
  }

  putRequest(id:number){
    this._server.putApi(this.form.value,id).subscribe(res=>{
      console.log(res);
    },(error)=>{
      console.log(error);
    })
  }

  deleteRequst(id:number){
    this._server.deleteApi(id).subscribe(res=>{
      console.log(res);
    },(error)=>{
      console.log(error);
    })
  }

  login(){
    this._jwt.login(this.loginForm.value).subscribe((res:any)=>{
      console.log(res);
      this._jwt.token=res.tokan;
    },(err)=>{
      console.log(err);
    })
  }

  tokenValidation(){
    this._jwt.tokenValidationApi().subscribe((res:any)=>{
      console.log(res);
    },(err)=>{
      console.log(err);
    })
  }


  eventButtion(){
    this._server.getEevent().subscribe((res:HttpEvent<any>)=>{
        console.log(res);
        
    })
  }
}

