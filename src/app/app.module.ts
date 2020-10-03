import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Oct1Component } from './oct1/oct1.component';
import { FormComponent } from './oct1/form/form.component';
import { TableComponent } from './oct1/table/table.component';
import { PlayersService } from './oct1/table/players.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Oct1Component,
    FormComponent,
    TableComponent
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
