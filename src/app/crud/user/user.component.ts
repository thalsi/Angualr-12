import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  form:any;
  FormError:any;
  list:User[]=[];
  type:string='Add';
  Button:boolean=false;

  constructor(
    private _fb:FormBuilder,
    private _homeService:HomeService) { }

  ngOnInit(): void {
    this.type='Add';
    this.form=this._fb.group({
      id:[null],
      name:['',Validators.required]
    });
    this.getList();
  }

  getList(){
    this._homeService.getList().subscribe((res:UserList)=>{
      this.list=res.users;
    })
  }

  getData(){
    return {
      id:this.form.value.id,
      name:this.form.value.name
    }
  }

  update(id:number,name:string){
    this.type='Edit';
    this.form.patchValue({
      id:id,
      name:name?name:'',
    })
  }

  dlete(id:number){
    this._homeService.delete(id).subscribe(res=>{
      this.getList();
    })
  }

  reset(){
    this.form.reset();
    this.type='Add';
    this.FormError=null;
  }

  save(){
    this.Button=true;
    console.log(this.form.value);
    
    let save:any;
    if(this.form.value){
      if( this.type=='Add'){
        save=this._homeService.add(this.getData());
      }else{
        save=this._homeService.update(this.getData());
      }
    }

    save.subscribe((res:any)=>{
      console.log(res);
      this.getList();
      this.reset()
      this.Button=false;
    },(err:HttpErrorResponse)=>{
      console.log("----->"+err.error.error);
      this.FormError=err.error.error;
      this.Button=false;
    })

  }
}

export interface UserList{
  users:User[];
}

export interface User{
  name:string;
}
