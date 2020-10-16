import { Component, OnInit } from '@angular/core';
import { MobileDataType } from './data-type';
import { MobileserviceService } from './mobileservice.service';

@Component({
  selector: 'app-oct13',
  templateUrl: './oct13.component.html',
  styleUrls: ['./oct13.component.css']
})
export class Oct13Component implements OnInit {

  mobiles: MobileDataType[]
  cart: MobileDataType[]
  noOfItems: number
  constructor(private _service: MobileserviceService) { }

  ngOnInit(): void {
    this._service.getMobiles().subscribe((mobile: MobileDataType[]) => this.mobiles = mobile)
    this._service.castCart.subscribe((cartItems: MobileDataType[]) => this.cart = cartItems)
    this.noOfItems = this.cart.reduce((acc, item: MobileDataType) => acc + item.qty, 0)
  }

}
