import { Component, OnInit } from "@angular/core";

@Component({
    selector:'',
    templateUrl:'./food.component.html',
    styleUrls:['./food.component.css']
})
export class FoodComponent implements OnInit{

    ngOnInit(): void {
        console.log('food');
        
    }
}