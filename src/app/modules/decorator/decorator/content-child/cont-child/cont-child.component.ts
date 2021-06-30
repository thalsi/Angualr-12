import { AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, Input, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'app-cont-child',
  templateUrl: './cont-child.component.html',
  styleUrls: ['./cont-child.component.css']
})
export class ContChildComponent implements OnInit,AfterViewInit {
  @ContentChild('contentChild') contentChild!:ElementRef;
  @ContentChildren('listContentChildner') ContentChildner!:QueryList<ElementRef>;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    if( this.contentChild){
      this.contentChild.nativeElement.style.backgroundColor='green';
    }
    let i=0;
    let colorList=['yellow','bule','red']
    this.ContentChildner.toArray().forEach((ele)=>{
      ele.nativeElement.style.backgroundColor=colorList[i];
      i++;
    })
  }

}
