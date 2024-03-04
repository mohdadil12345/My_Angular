import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-productss',
  templateUrl: './productss.component.html',
  styleUrl: './productss.component.css'
})
export class ProductssComponent {
  @Input()
    prod : {
      id:number,
      in_inventory?:boolean,
       price:number,
       rating : {

         rate:number,
       },
         image:string,
          title:string,
           discount:number,
            category:string
          }
}
