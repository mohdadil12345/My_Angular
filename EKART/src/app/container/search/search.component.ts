import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

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




// btnserchval :string = ""

     @ViewChild("searchInput") searchInputEl  : ElementRef

btnclick() {

  alert(this.searchInputEl.nativeElement.value)

  this.searchText = this.searchInputEl.nativeElement.value
  this.searchtextchanged.emit(this.searchText )

}





}


