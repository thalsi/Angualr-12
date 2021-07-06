import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmitService {
    data:any=new Subject;
  constructor() { }

  activeMe(v:any){
    this.data.next(v);
  }
}
