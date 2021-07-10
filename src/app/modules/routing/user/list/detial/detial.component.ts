import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detial',
  templateUrl: './detial.component.html',
  styleUrls: ['./detial.component.css']
})
export class DetialComponent implements OnInit {
  data:any;
  user:any;
  userList=[
    {id:1,name:'ali'},
    {id:2,name:'zhaer'},
    {id:3,name:'Irshad'},
    {id:4,name:'mamma'},
    {id:5,name:'Aju'}
  ]

  constructor(
    private roter:Router,
    private activatedRoute:ActivatedRoute,
    ) {
    console.log(this.roter);
    console.log(this.activatedRoute);

   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res)=>{
      console.log(res);
      this.data=Number(res.id);
       this.user=this.userList[this.data-1];
      
    })
  }

}
