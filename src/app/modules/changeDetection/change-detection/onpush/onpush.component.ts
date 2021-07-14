import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-onpush',
  templateUrl: './onpush.component.html',
  styleUrls: ['./onpush.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class OnpushComponent implements OnInit {

  @Input() data!: string[];
  @Input() value!:string;

  constructor(private _cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    this._cd.detach()
//DetectionChanfes maully
    //  setInterval(()=>{
    //   this._cd.detectChanges();
    //  },1000)

  }

  onpush(){
    console.log("2------>onpush");
    
  }
}
