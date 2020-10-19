import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { MobileDataType } from './data-type';

@Injectable({
  providedIn: 'root'
})
export class MobileserviceService {

  private _url = 'https://jsonblob.com/api/71be19f1-f982-11ea-a18d-ed10fdd9f82a'
  constructor(private _http: HttpClient) { }
  
  private cart = new BehaviorSubject<Array<any>>([])
  castCart = this.cart.asObservable();


  getMobiles(): Observable<{}>{
    return this._http.get(this._url)
    //return this.mobiles
  }

  setCart(cartItems: any): void {
    this.cart.next(cartItems)
  }

}
