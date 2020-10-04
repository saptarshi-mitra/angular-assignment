import { Component, Input, OnInit } from '@angular/core';
import { PlayersService } from './players.service';

export interface playersData{
  id: number,
  name: string,
  runs: number,
  average: number,
  wickets: number,
  catches: number,
  hasRetired: boolean
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() dataEntered: playersData
  players: playersData[]

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
  }
}
