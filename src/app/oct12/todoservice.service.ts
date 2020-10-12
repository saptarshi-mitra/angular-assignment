import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  _url = 'https://jsonplaceholder.typicode.com/todos'
  constructor(private _http: HttpClient) { }

  getData(){
    return this._http.get(this._url)
  }

  createPost(post){
    return this._http.post(this._url, JSON.stringify(post))
  }

  deletePost(id: number){
    return this._http.delete(`${this._url}/${id}`)
  }

  updatePost(updatedPost: any, id: number){
    return this._http.patch(`${this._url}/${id}`, JSON.stringify(updatedPost))
  }
}
