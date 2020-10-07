import { Component, Input, OnInit } from '@angular/core';
import { SendMessageService } from '../send-message.service';

@Component({
  selector: 'sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {

  message: string

  constructor(private service: SendMessageService) {}

  ngOnInit(): void {
    this.service.cast.subscribe(message => this.message = message)
  }

  modifyMessage(){
    this.message = 'This is the modified message upon clicking the button in sibling 2'
    console.log(this.message)
    this.service.setMessage(this.message)
  }

}
