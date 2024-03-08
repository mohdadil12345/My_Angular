import { Component, ViewChild } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { productsTypes } from '../models/productsTypes';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  title =   "Mohd Adil"



product = {
name : "Iphone",
price : 9999,
color : "Red",
DiscountedPrice : 8.5,
instock : 5,
image : '../../assets/iphone1.jpg'


}

addTocart : number = 0



inccc() {
  if(this.addTocart < this.product.instock)
  this.addTocart++
}
deccc() {
  if(this.addTocart > 0 ){

    this.addTocart--
  }
}

GetDiscoPrice() {
 return  (this.product.price * this.product.DiscountedPrice / 100) - this.product.DiscountedPrice
}

OnNameChange(event:any) {
  // console.log(event) // event object
  // console.log(event.target.value)   // input value
   this.title = event.target.value
}



 listofdata : string[] = ["adil", "osama", "moneer", "saiful"]

 parentsercval:string = ""

 setsearchtext(value : string) {
   this.parentsercval = value
 }




//   details wala prdotc list to container to prodtdetails
//  we asign product list componnt to this property
@ViewChild(ProductDetailsComponent)prodlistomponnt : productsTypes;

// product_details_Component store a referenc to productlist component

//  now we passs product_details_Component to product details component go indetails create one propert proliscom


}
