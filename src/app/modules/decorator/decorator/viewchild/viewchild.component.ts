import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewChildComponent } from './view-child/view-child.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit,AfterViewInit {

  @ViewChild(ViewChildComponent) child!:ViewChildComponent;
  @ViewChild('viewChildElement') childElement!:ElementRef;

  elementValue:string='hi';

  constructor(private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    
  }

  Ingreement(){
    this.child.ingrement();
  }

  Dicrement(){
    this.child.degremnt();
  }

  ngAfterViewInit(){
    // console.log(this.childElement);

    //use this or promes
    setTimeout(() => {
      this.elementValue = this.childElement.nativeElement.children[1].innerText;
    }, 0);
    //or
    this.elementValue = this.childElement.nativeElement.children[1].innerText;
    this.cd.detectChanges();
    setInterval(()=>{
      if( this.childElement.nativeElement.children[1].style.backgroundColor=='green')
      this.childElement.nativeElement.children[1].style.backgroundColor='blue';
      else
      this.childElement.nativeElement.children[1].style.backgroundColor='green';
    },1000)
  }

}
