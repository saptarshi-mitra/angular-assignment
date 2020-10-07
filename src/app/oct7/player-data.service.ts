import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {
  //data is present at : https://jsonblob.com/api/72692fa3-08b9-11eb-a3c1-ad05fa34dd58
  url = 'https://jsonblob.com/api/72692fa3-08b9-11eb-a3c1-ad05fa34dd58'
  private players = new BehaviorSubject([])
  cast = this.players.asObservable();
  constructor(private http: HttpClient) {  }
  
  getData(){
    return this.http.get(this.url)
  }
}
