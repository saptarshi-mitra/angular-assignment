import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './oct13/cart/cart.component';
import { CheckoutComponent } from './oct13/checkout/checkout.component';
import { IndividualItemComponent } from './oct13/individual-item/individual-item.component';
import { Oct13Component } from './oct13/oct13.component';
import { NotFoundComponent } from './oct19/not-found/not-found.component';
import { Oct19Module } from './oct19/oct19.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./oct19/oct19.module').then(m => m.Oct19Module)
  },
  // {
  //   path: 'cart',
  //   component: CartComponent
  // },
  // {
  //   path: 'item/:id',
  //   component: IndividualItemComponent
  // },
  // {
  //   path: 'checkout',
  //   component: CheckoutComponent
  // },
  { path: 'home', loadChildren: () => import('./oct19/oct19.module').then(m => m.Oct19Module) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
