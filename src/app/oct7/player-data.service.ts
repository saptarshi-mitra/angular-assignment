import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {
  url = 'https://jsonblob.com/api/72692fa3-08b9-11eb-a3c1-ad05fa34dd58'
  constructor(private _http: HttpClient) {  }
  
  getData(){
    return this._http.get(this.url)
  }
}
