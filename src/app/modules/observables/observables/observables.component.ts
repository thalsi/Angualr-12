import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { EmitService } from './servers/emit.service';


@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit ,OnDestroy{
  myObservable:any;
  serverObr:any;

  expression:boolean=false;

  value:any;
  constructor(private emitService:EmitService) { }

  ngOnInit(): void {
    //one
    console.log("sync start");
    const observable = new Observable (sub=>{
      sub.next('observer starting');
      sub.next('1');
      sub.next('2');
      sub.next('3');

    });

    observable.subscribe(x=>{
      console.log(x);
      this.value=x;
    })
    console.log("sync End");


    //two
    console.log("Async stating");
    this.myObservable= new Observable(sub=>{
      sub.next('hi 1')
      sub.next('hi 2')
      sub.next('hi 3')
      setTimeout(() => {
        sub.next('hi 4')
        sub.complete();
      }, 100);
    });

    this.myObservable.subscribe({
      next(x: any){
        console.log('get value-->'+x);
      },
      error(err:any){
        console.log('error-->'+err);
      },
      complete(com:any){
        console.log('completed-->'+com);
      }
    })
    console.log("Async End");

    //three
    this.serverObr= new Observable(obv=>{
      let count:number=0;
      setInterval(()=>{
            obv.next(count);
            count++;
      },1000)
    })

    this.serverObr.pipe(
      map((x:any)=>{
          return 'sever value:'+x;
        }
      )
    ).subscribe((x: any)=>{
      console.log(x);
    }

    );

    //four
    this.emitService.data.subscribe((x:any)=>{
      this.expression=x;
    });

    //five

    const observe:Observable<number>= of(33,44,55,66);

    const myObserver={
      next:(x:any)=>{
        console.log('angualr --><<<'+x)
        
      },error:(err:any) =>{console.log(err)},
      
      complete: () => console.log('Observer got a complete notification'),
    }

    observe.subscribe(myObserver);

  }


  ngOnDestroy(){
    this.myObservable.unsubscribe();
  }

  
}
