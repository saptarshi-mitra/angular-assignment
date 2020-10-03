import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor() { }
  getPlayers(){
    return [
      {
        id:1,
        name:'Sachin',
        runs:15964,
        average: 52.2,
        wickets: 32,
        catches: 86,
        hasRetired: false
      },
      {
        id:2,
        name:'Sourav',
        runs:11658,
        average: 46.2,
        wickets: 32,
        catches: 45,
        hasRetired: false
      },
      {
        id:3,
        name:'Dravid',
        runs:12005,
        average: 48.2,
        wickets: 0,
        catches: 102,
        hasRetired: false
      },
    ]
  }
}
