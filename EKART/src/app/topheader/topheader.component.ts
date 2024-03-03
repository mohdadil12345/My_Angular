import { Component } from '@angular/core';

@Component({
  selector: 'topheader',
  templateUrl: './topheader.component.html',
  styleUrl: './topheader.component.css'
})

export class TopheaderComponent {
  MenuItems : string[] = ["Home", "Products", "Sale", "New Arrival", "Contact"]
}
