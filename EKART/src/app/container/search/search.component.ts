import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  
  searchText : string = ""


  updtserchfun(event:any) {
    //  console.log(event.target.value)
    this.searchText = event.target.value
    
  }




// create evnt binding
@Output()
searchtextchanged:EventEmitter<string> =  new EventEmitter<string>()
   
searchmethods(){
  this.searchtextchanged.emit(this.searchText)
}




btnserchval :string = ""

btnclick(inputell : HTMLInputElement) {
    // console.log(inputEl)
    // console.log(inputell.value)
    this.btnserchval = inputell.value

    //  child c parent m bhjna k liye when ever btnclick is raised we have to send the below event
    this.searchtextchanged.emit(this.btnserchval)
}





}


