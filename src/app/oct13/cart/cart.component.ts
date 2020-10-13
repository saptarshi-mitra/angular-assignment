import { Component, OnInit } from '@angular/core';
import { MobileserviceService } from '../mobileservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart
  cartPrice
  noOfItems
  constructor(private _service: MobileserviceService) { }

  ngOnInit(): void {
    this._service.castCart.subscribe(cartItems => this.cart = cartItems)
    this.totalPrice()
  }

  totalPrice(){
    this.cartPrice = this.cart.reduce((acc, item) => acc + item.price, 0)
    this.noOfItems = this.cart.length
  }

  removeFromCart(id: number){
    this.cart = this.cart.filter(item => item.id != id)
    this.totalPrice()
    this._service.setCart(this.cart)
  }

}
