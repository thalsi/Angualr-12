import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-tempate-driven-form',
  templateUrl: './tempate-driven-form.component.html',
  styleUrls: ['./tempate-driven-form.component.css']
})
export class TempateDrivenFormComponent implements OnInit {
  @ViewChild('tempForm4') tempForm4!:NgForm;

  city:string='Muvattpuazha'

  countryList:{id:number,name:string} []= [
   { id:23,name:'India'},
   { id:4,name:'uk'},
   { id:6,name:'Dubai'},
  ];

  preson:Person={
    name:'',
    gender:'',
    address:{pincode:'', places:'' }
  };

  user:Person={
    name:'',
    gender:'',
    address:{pincode:'', places:'' }
  };

  constructor() { }

  ngOnInit(): void {

    this.preson={
      name:'Ajas K t',
      gender:'male',
      address:{pincode:'556677', places:'muvattupzha,po' }
    }


    setTimeout(()=>{
      this.tempForm4.setValue({
        name:'Princes Mathu',
        gender:'male',
        address:{pincode:'54546', places:'Ikkuki,po' }
      });
    },0)
  }

  submited(_form: NgForm){
    console.log(_form);
    console.log(_form.value);
  }

  submited2(form:NgForm){
    console.log(form.value);
  }

  submit3(form:NgForm){
    console.log(form.value);
  }

  individually(){
    this.preson.name="Karthika"
  }

  reset(form:NgForm){
    form.resetForm();
  }

  submit4(form:NgForm){
    console.log(form.value);
  }

  individuallyTempVar(){
    this.tempForm4.controls['name'].setValue('Groge');
  }

  patchValue() {
    let obj={
      name:'meeran path',
      gender:'male',
      address:{pincode:'556677', places:'pariyamr,po' }
    }

    this.tempForm4.control.patchValue(obj);
  }

  patchValueFormGroup(){
    let obj={pincode:'2323324546', places:'kozhikodue,po' };
    let address= this.tempForm4.controls["address"] as FormGroup;
    address.patchValue(obj);
  }

  resetTemp(){
    this.tempForm4.reset();
  }

  resetTempfrom(){
    this.tempForm4.resetForm();
  }

}

export interface Person{
  name:string;
  gender:string;
  address:{
    pincode:string;
    places:string;
  }
}
