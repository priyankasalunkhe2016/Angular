import { Component, ViewChild, ElementRef } from '@angular/core';
import { nmcall } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  name ='pritam';
  myarr={ "one": "Priyanka", "two": 2, "three": 3 }; 
    @ViewChild('nm')
  nm1 : ElementRef
  constructor() { }

  ngOnInit() {
    //console.log(this.nm1)
    this.nm1.nativeElement.value = 'android codekul'
  }

  
}
