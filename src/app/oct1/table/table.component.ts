import { Component, Input, OnInit } from '@angular/core';
import { PlayersService } from './players.service';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() dataEntered
  players

  constructor(service: PlayersService) {
    this.players = service.getPlayers()
   }

  ngOnInit(): void {
  }

  addSomeone(){
    this.players = [...this.players, this.dataEntered]
  }

  removePlayers(){
    this.players = this.players.filter(player => !player.hasRetired)
    console.log(this.players)
  }
}
