import { Component } from '@angular/core';
import { playersData } from './table/table.component';

@Component({
  selector: 'app-oct1',
  templateUrl: './oct1.component.html',
  styleUrls: ['./oct1.component.css']
})
export class Oct1Component {

  dataEntered: playersData

  onDataEntered(dataEntered: playersData){ this.dataEntered = dataEntered }

}
