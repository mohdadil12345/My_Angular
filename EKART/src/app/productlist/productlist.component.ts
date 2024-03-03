import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {

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

}