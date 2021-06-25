import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempalte-syntax',
  templateUrl: './tempalte-syntax.component.html',
  styleUrls: ['./tempalte-syntax.component.css']
})
export class TempalteSyntaxComponent implements OnInit {
  stringInterpulation='String interpulation';
  imageUrl="";
  v:any=3;
  condtion:boolean=false;
  value='Element proparty banding';
  twoWay='Two way banding'
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.condtion=!this.condtion;
      console.log(this.condtion);
      
    },1000);
  }

  stament(){
    return "tempalte statement print.."
  }

  eventBanding(){
    console.log('event banding');  
  }

  temp(temp:any){
    console.log(temp);
    
  }
}
