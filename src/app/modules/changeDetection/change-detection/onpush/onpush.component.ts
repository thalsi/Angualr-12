import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-onpush',
  templateUrl: './onpush.component.html',
  styleUrls: ['./onpush.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class OnpushComponent implements OnInit {
  @Input() data:string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onpush(){
    console.log('2-->onpush....');
  }

}
