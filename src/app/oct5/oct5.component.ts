import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oct5',
  templateUrl: './oct5.component.html',
  styleUrls: ['./oct5.component.css']
})
export class Oct5Component implements OnInit {
  
  noOfItems = 0
  cart: boolean
  constructor() { }
  
  ngOnInit(): void {
  }
  emitted(e: boolean){
    this.cart = e
    if(e)
      this.noOfItems++
    else
      this.noOfItems--
  }
  
}
