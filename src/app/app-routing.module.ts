import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './oct13/cart/cart.component';
import { CheckoutComponent } from './oct13/checkout/checkout.component';
import { Oct13Component } from './oct13/oct13.component';

const routes: Routes = [{
  path: '',
  component: Oct13Component
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
