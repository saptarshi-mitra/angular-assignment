import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';
import { from } from 'rxjs'
import { concatMap, filter, take, toArray } from 'rxjs/operators'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'crudrxjs',
  templateUrl: './crudrxjs.component.html',
  styleUrls: ['./crudrxjs.component.css']
})
export class CrudrxjsComponent implements OnInit {

  form = new FormGroup({
    userId: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required)
  })

  todos$
  completedTodos$
  visibility = false //for last part
  constructor(private _todoservice: TodoserviceService) { }

  ngOnInit(): void {
    this._todoservice.getData().pipe(
        concatMap(data => from(data as any[])),
        take(10),
        filter(item => !item.completed),
        toArray()
      ).subscribe(data => this.todos$ = data)
  }

  postNewTodo(){
    this.visibility = false
    let post = this.form.value
    post['completed'] = false
    
    this.todos$.push(post)
    this._todoservice.createPost(post).subscribe((response: any) => {
      post['id'] = response.id;
    })
    
  }

  deleteTodo(id: number){
    this.visibility = false
    this.todos$ = this.todos$.filter(todo => todo.id!=id)
    this._todoservice.deletePost(id).subscribe()
  }

  updateTodo(id: number){
    this.visibility = false
    this.todos$.map(todo => {
      if(todo.id == id)
        todo.completed = true
    })
    console.log(this.todos$)
    this._todoservice.updatePost({completed: true}, id).subscribe()
  }

  viewCompletedTodos(id: number){
    this.visibility = true
    this._todoservice.getData().pipe(
      concatMap(data => from(data as any[])),
      take(20*id),
      filter(item => !!item.completed && item.userId==id),
      toArray()
    ).subscribe(data => this.completedTodos$ = data)
  }

  get userId(){ return this.form.get('userId') }
  get title(){ return this.form.get('title') }
}
