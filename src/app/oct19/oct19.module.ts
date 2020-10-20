import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Oct19RoutingModule } from './oct19-routing.module';
import { Oct19Component } from './oct19.component';
import { FlipnavComponent } from './flipnav/flipnav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    Oct19Component,
    FlipnavComponent,
    NotFoundComponent,
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
