import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../model/User';
import { ServerService } from '../server/noraml/server.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  form:any;
  user:User[]=[];
  // user:any;
  constructor(private _server:ServerService) { }

  ngOnInit(): void {

    this.form= new FormGroup({
      email:new FormControl(''),
      first_name:new FormControl(''),
      last_name:new FormControl(''),
      gender:new FormControl(''),
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
    },(error)=>{
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

}

