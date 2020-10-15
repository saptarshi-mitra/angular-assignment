import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { concatMap, filter } from 'rxjs/operators';
import { MobileserviceService } from '../mobileservice.service';

@Component({
  selector: 'app-individual-item',
  templateUrl: './individual-item.component.html',
  styleUrls: ['./individual-item.component.css']
})
export class IndividualItemComponent implements OnInit {

  cart = []
  mobile
  toCart = false
  constructor(private _service: MobileserviceService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this._route.snapshot.paramMap.get('id')
    this._service.getMobiles().pipe(
      concatMap(mobile => from(mobile as any[])),
      filter((mobile: any) => mobile.id == id))
    .subscribe(response => {
      this.mobile = response
    })
    this._service.castCart.subscribe(cartItems => this.cart = cartItems)

  }

  addToCart(){
    this.mobile['qty'] = 1
    this.cart.push(this.mobile)
    this._service.setCart(this.cart)
    this.toCart = true
  }

}
