import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server/server.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private _server:ServerService) { }

  ngOnInit(): void {
  }

  postMethord(){
    this._server.psot().subscribe((res)=>{
      console.log(res);
    });
  }
}
