import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
  template:`
  <h4>NgSwitch</h4>
  <ul *ngFor="let person of people"
      [ngSwitch]="person.city"> 
  
    <li *ngSwitchCase="'Satara'" 
        class="text-success">{{ person.name }} ({{ person.city }})
    </li>
    <li *ngSwitchCase="'Mumbai'"
        class="text-primary">{{ person.name }} ({{ person.city }})
    </li>
    <li *ngSwitchCase="'Kolhapur'"
        class="text-danger">{{ person.name }} ({{ person.city }})
    </li>
    <li *ngSwitchCase ="'Nagpur'"
     class="text-warning">{{person.name}} ({{person.city}})
    </li>
    <li *ngSwitchDefault 
        class="text-success">{{ person.name }} ({{ person.city }})
    </li>
  </ul>`
})
export class SwitchComponent implements OnInit {

  constructor() { }
  people : any[]=[
    {"name":"Pritam","city":"Satara"},
    {"name":"Rohan","city":"Nagpur"},
    {"name":"Prasad","city":"Kolhapur"},
    {"name":"Sagar","city":"Mumbai"}]


  ngOnInit() {
  }

}
