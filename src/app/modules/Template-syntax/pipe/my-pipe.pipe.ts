import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'myPipes'})
export class MyPipe implements PipeTransform{

    transform(value:number){
        return value+5;
    }
}