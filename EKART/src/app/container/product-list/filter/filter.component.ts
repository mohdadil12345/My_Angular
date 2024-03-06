import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

@Input()
all : number = 0;

@Input()
inStock : number = 0;

@Input()
outofStock : number = 0




@Output()
filterradiobtnchanged: EventEmitter<string>  =  new EventEmitter<string>()
//  we raise filter event when selected button chnages


selectedfilterradiobuton : string = "all"  // by default on page load all radio button seleted
//  we will bind this custom event in parent componenet

// filter handling event by using @output decorator we make custom of event we create instance of event



onselectradiochanged() {
  console.log(this.selectedfilterradiobuton)
  this.filterradiobtnchanged.emit(this.selectedfilterradiobuton)
}



}
