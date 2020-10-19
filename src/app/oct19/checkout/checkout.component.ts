import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MobileserviceService } from '../mobileservice.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  orderSuccess = false
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    zip: new FormControl('', Validators.required)
  })
  constructor(private _service: MobileserviceService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form)
    this.orderSuccess = true
    this._service.setCart([])
  }

  get firstName(){ return this.form.get('firstName') }
  get lastName(){ return this.form.get('lastName') }
  get email(){ return this.form.get('email') }
  get address(){ return this.form.get('address') }
  get country(){ return this.form.get('country') }
  get city(){ return this.form.get('country') }
  get zip(){ return this.form.get('zip') }
}
