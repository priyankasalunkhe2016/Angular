import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }
 
  str = ''
  

  ngOnInit() {
  }
  addStr(val : string){
    this.str +=val
    console.log(this.str)
  }
  makeClr(){
    this.str  = ""
    this.str = ""
  }
  makeEql(){
    this.str=eval(this.str)
    console.log(this.str)
  }

}
