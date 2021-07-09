import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  name= new FormControl('');
  form:any;
  fbform:any;
  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {

    this.form=new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl(''),
      users:new FormArray([
        new FormControl('alimon'),
        new FormControl('akuu'),
        new FormControl(''),
      ])
    })


    this.fbform= this.fb.group({
      name:[''],
      email:[''],
      address:this.fb.group({
        phone:[''],
        pincode:['']
      })
    })
  }

  FormControlsetValue(){
    this.name.setValue('Ammer');
  }

  FormControlreset(){
    this.name.reset();
  }

  FormControlChangeVaule(){
    this.name=new FormControl ("Ali mojo");
  }

  submit(){
    console.log(this.form.value);
    
  }

  get user(): FormArray {

    return this.form.get('users') as FormArray; 
  }

  addUserFiled(){
    let a=this.form.get('users');
    a.push(new FormControl()); 
  }

  deleteFiled(index:number){
    let a=this.form.get('users');
    a.removeAt(index);
  }


  fbformSumbit(){
    console.log('ll');
    
   console.log( this.fbform.value);
   
  }
}
