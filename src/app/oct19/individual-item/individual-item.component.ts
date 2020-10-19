import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { concatMap, filter } from 'rxjs/operators';
import { MobileDataType } from '../data-type';
import { MobileserviceService } from '../mobileservice.service';

@Component({
  selector: 'app-individual-item',
  templateUrl: './individual-item.component.html',
  styleUrls: ['./individual-item.component.css']
})
export class IndividualItemComponent implements OnInit {

  cart: MobileDataType[]
  mobile: MobileDataType
  toCart = false
  constructor(private _service: MobileserviceService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this._route.snapshot.paramMap.get('id')
    this._service.getMobiles().pipe(
      concatMap(mobile => from(mobile as any[])),
      filter((mobile: MobileDataType) => mobile.id == id))
    .subscribe((response: MobileDataType) => {
      this.mobile = response
    })
    this._service.castCart.subscribe((cartItems: MobileDataType[]) => this.cart = cartItems)

  }

  addToCart(): void{
    let isItemPresentInCart = false
    this.cart.map((item: MobileDataType) => {
      if(item.id == this.mobile.id){
        item.qty++
        this.toCart = true
        isItemPresentInCart = true
      }
    })
    if(!isItemPresentInCart){
      this.mobile['qty'] = 1
      this.cart.push(this.mobile)
      this._service.setCart(this.cart)
      this.toCart = true
    }
  }

}
