import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IndividualItemComponent } from './individual-item/individual-item.component';

const routes: Routes = [
  { 
    path: '',
    component: HomePageComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'item/:id',
    component: IndividualItemComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Oct19RoutingModule { }
