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
  valdationForm:any;
  formArrayInsideGroup:any;

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

    this.valdationForm=new FormGroup({
      name: new FormControl('',[Validators.required,Validators.maxLength(3)]),
      email: new FormControl(''),
      city: new FormControl('')
    })

    this.formArrayInsideGroup= this.fb.group({
      control:[''],
      persons:this.fb.array([

      ])
    });
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
    console.log( this.fbform.value);
  }

  valudationtest(){
    console.log(this.valdationForm);
    
  }

  change(){
    console.log(this.valdationForm.controls.name);
  }

  addGroup(fast:any,last:any){
    console.log(fast);
    
    // let fast="ali mone";
    // let last="K t";

    let fb_array=this.formArrayInsideGroup.get('persons');
    fb_array.push(this.fb.group({
      fast_name:[fast,Validators.required],
      last_name:[last,Validators.required]
    }))

   let a= this.getPersonsArray.controls
   console.log(a);
   
  }

  get getPersonsArray():FormArray
  {
    let arry=this.formArrayInsideGroup.get('persons');
    console.log(arry);
    
    return arry as FormArray;
  }
}
