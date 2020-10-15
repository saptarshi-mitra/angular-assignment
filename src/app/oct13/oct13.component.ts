import { Component, OnInit } from '@angular/core';
import { MobileserviceService } from './mobileservice.service';

@Component({
  selector: 'app-oct13',
  templateUrl: './oct13.component.html',
  styleUrls: ['./oct13.component.css']
})
export class Oct13Component implements OnInit {

  mobiles
  cart
  noOfItems
  constructor(private _service: MobileserviceService) { }

  ngOnInit(): void {
    // this._service.castMobiles.subscribe(mobile => this.mobiles = mobile)
    this._service.getMobiles().subscribe(mobile => this.mobiles = mobile)
    this._service.castCart.subscribe(cartItems => this.cart = cartItems)
    this.noOfItems = this.cart.reduce((acc, item) => acc + item.qty, 0)
  }

  addToCart(id: number){
    this.cart.push(this.mobiles.filter(mobile => mobile.id == id)[0])
    this._service.setCart(this.cart)
  }

}
