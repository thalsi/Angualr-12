import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector:'app-school',
    templateUrl:'./school.component.html',
    styleUrls:['./school.component.css']
})
export class School implements OnInit, OnDestroy{

    ngOnInit(): void {
        console.log('hi school compenent');
        
    }

    ngOnDestroy(): void {
        
    }

}