import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output() dataEntered = new EventEmitter()
  form = new FormGroup({
    id: new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    runs: new FormControl('',Validators.required),
    average: new FormControl('',Validators.required),
    catches: new FormControl('',Validators.required),
    wickets: new FormControl('',Validators.required)
  })
  get id(){return this.form.get('id')}
  get name(){return this.form.get('name')}
  get runs(){return this.form.get('runs')}
  get average(){return this.form.get('average')}
  get catches(){return this.form.get('catches')}
  get wickets(){return this.form.get('wickets')}
  
 dataSend(){ this.dataEntered.emit(this.form.value) }
}
