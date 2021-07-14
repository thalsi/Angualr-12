import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _roter:Router) { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear();
    this._roter.navigate(['/poject'])
  }

}
