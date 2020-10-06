import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Oct1Component } from './oct1/oct1.component';
import { FormComponent } from './oct1/form/form.component';
import { TableComponent } from './oct1/table/table.component';
import { PlayersService } from './oct1/table/players.service';
import { Oct5Component } from './oct5/oct5.component';
import { ItemComponent } from './oct5/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    Oct1Component,
    FormComponent,
    TableComponent,
    Oct5Component,
    ItemComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
