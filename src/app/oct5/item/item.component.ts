import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Output() itemInCart = new EventEmitter()
  hasBeenAddedToCart = false
  buttonStyle: string
  value: string
  constructor() { }
  
  ngOnInit(): void {
    this.buttonStyle = "btn btn-lg btn-success"
    this.value = "Add to cart"
  }
  addOrRemoveFromCart(){
    this.hasBeenAddedToCart = !this.hasBeenAddedToCart
    if(this.hasBeenAddedToCart){//since item is already added
      this.buttonStyle = "btn btn-lg btn-danger"
      this.value = "Remove from cart"
    }
    else{//since item is not in cart
      this.buttonStyle = "btn btn-lg btn-success"
      this.value = "Add to cart"
    }
    this.itemInCart.emit(this.hasBeenAddedToCart)
  }

}
