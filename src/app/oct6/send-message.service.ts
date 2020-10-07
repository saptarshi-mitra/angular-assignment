import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SendMessageService {

  // message="This is a message from the service"
  private message = new BehaviorSubject<string>('This is a message from the service')
  cast = this.message.asObservable();
  
  constructor() { }
  
  getMessage(){
    return this.message
  }

  setMessage(newMessage: string){
    this.message.next(newMessage)
  }
}
