import { Component, OnInit } from '@angular/core';
import { SendMessageService } from '../send-message.service';

@Component({
  selector: 'sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

  message: string

  constructor(private service: SendMessageService) {}

  ngOnInit(): void {
    this.service.cast.subscribe(message => this.message = message)
  }

  modifyMessage(){
    this.message = 'This is the modified message upon clicking the button in sibling 1'
    console.log(this.message)
    this.service.setMessage(this.message)
  }

}
