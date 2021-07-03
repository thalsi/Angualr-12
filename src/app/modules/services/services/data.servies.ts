import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class DataServies{
    button = new  EventEmitter();
    count:number=45;

    countData(){
        this.count++;
    }
}