import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:any;
  constructor(
    private _loginService:LoginService,
    private _router:Router
    ) { }

  ngOnInit(): void {

    this.form= new FormGroup({
      username:new FormControl(''),
      password:new FormControl('')
    })

   
  }

  login(){
    this._loginService.login(this.form.value).subscribe((res:any)=>{
      localStorage.clear();
      console.log(res);
      if(res.tokan){
        localStorage.setItem('Token',res.tokan)
        this._router.navigate(['/home'])
      }

    },(err)=>{
      console.log(err);
      
    })
  }


}
