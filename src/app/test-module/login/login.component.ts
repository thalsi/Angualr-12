import { Component } from "@angular/core";

@Component({
    selector:'app-login',
    template:`<app-home></app-home>
    <p>hi</p>`
})
export class Login {
    constructor(){
        console.log('contenter work');
        
    }

}