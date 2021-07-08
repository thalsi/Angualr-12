import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tempate-driven-form',
  templateUrl: './tempate-driven-form.component.html',
  styleUrls: ['./tempate-driven-form.component.css']
})
export class TempateDrivenFormComponent implements OnInit {

  city:string='Muvattpuazha'

  countryList:{id:number,name:string} []= [
   { id:23,name:'India'},
   { id:4,name:'uk'},
   { id:6,name:'Dubai'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  submited(_form: NgForm){
    console.log(_form);
    console.log(_form.value);
  }

  submited2(form:NgForm){
    console.log(form.value);
  }

}
