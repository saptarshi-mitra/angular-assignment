import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Oct19RoutingModule } from './oct19-routing.module';
import { Oct19Component } from './oct19.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FlipnavComponent } from './flipnav/flipnav.component';
import { IndividualItemComponent } from './individual-item/individual-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    Oct19Component,
    CartComponent,
    CheckoutComponent,
    FlipnavComponent,
    IndividualItemComponent,
    NotFoundComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    Oct19RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class Oct19Module { }
