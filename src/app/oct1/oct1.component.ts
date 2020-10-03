import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oct1',
  templateUrl: './oct1.component.html',
  styleUrls: ['./oct1.component.css']
})
export class Oct1Component implements OnInit {

  dataEntered
  constructor() { }

  ngOnInit(): void {
  }
  onDataEntered(dataEntered){
    this.dataEntered = dataEntered
    console.log('from parent component',this.dataEntered)
  }

}
