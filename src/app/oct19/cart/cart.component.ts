import { Component, OnInit } from '@angular/core';
import { MobileDataType } from '../data-type';
import { MobileserviceService } from '../mobileservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: MobileDataType[]
  cartPrice: number
  noOfItems: number
  constructor(private _service: MobileserviceService) { }

  ngOnInit(): void {
    this._service.castCart.subscribe((cartItems: MobileDataType[]) => this.cart = cartItems)
    this.totalPrice()
  }

  totalPrice(){
    this.cartPrice = this.cart.reduce((acc, item: MobileDataType) => acc + (item.price * item.qty), 0)
    this.noOfItems = this.cart.reduce((acc, item: MobileDataType) => acc + item.qty, 0)
  }

  removeFromCart(id: number): void {
    this.cart = this.cart.filter((item: MobileDataType) => item.id != id)
    this._service.setCart(this.cart)
    this.totalPrice()
  }

  increaseNumber(id: number): void {
    this.cart.filter((item: MobileDataType) => item.id == id)[0]['qty']++
    this.totalPrice()
  }
  
  decreaseNumber(id: number): void {
    this.cart.filter((item: MobileDataType) => item.id == id)[0]['qty']--
    this.totalPrice()
  }

}
