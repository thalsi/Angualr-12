import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  userList=[
    {id:1,name:'ali'},
    {id:2,name:'zhaer'},
    {id:3,name:'Irshad'},
    {id:4,name:'mamma'},
    {id:5,name:'Aju'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
