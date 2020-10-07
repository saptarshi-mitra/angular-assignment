import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from '../player-data.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {

  players
  constructor(private service: PlayerDataService){  }
  
  ngOnInit(): void {
    this.service.getData().subscribe(response => this.players = response)
  }

  removePlayers(){
    this.players = this.players.filter(player => !player.hasRetired)
  }


}
