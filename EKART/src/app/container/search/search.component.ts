import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText : string = "womens watch"


  updtserchfun(event:any) {
    //  console.log(event.target.value)
    this.searchText = event.target.value
    
  }
}
