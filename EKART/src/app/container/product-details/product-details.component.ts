import { Component, Input } from '@angular/core';
import { productsTypes } from '../../models/productsTypes';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {



  // detai_prod : productsTypes

//  initialy when page load it will undefined becoz we didnot select any products
@Input() proliscom : ProductListComponent = undefined

detai_prod : productsTypes
// detai_prod : productsTypes = this.proliscom.seleted_prod


// life cycle hook nginit whenver all properties of component classes call
ngOnInit(){
  this.detai_prod = this.proliscom.seleted_prod
}


}
