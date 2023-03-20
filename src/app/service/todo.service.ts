import { Injectable } from '@angular/core';
import {todo} from '../service/todo';
import {of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todolist:todo[]=[

    {
      todoid:'1',
      todosubject:'Learn Angular',
      todostatus:false
    },
    {
      todoid:'2',
      todosubject:'Learn JavaScript',
      todostatus:false
    }

  ]
  constructor(private http:HttpClient) { }

  getUsers(){
    return  this.http.get('https://jsonplaceholder.typicode.com/users');
  }




  viewtodo(){
    return of (this.todolist);
  }

  addtodo(usertodo:todo){
    this.todolist.push(usertodo);
  }

  updatestatus(updatetodo:todo){
    this.todolist.map((item)=>
    {
      if(item.todoid==updatetodo.todoid)
      {
        item.todostatus=!item.todostatus;
      }
      })
  }

  deleteTodo(deltodo:todo){
    const index=this.todolist.findIndex((item)=>{
      if(item.todoid==deltodo.todoid){
        return item.todoid;
      }

    })
    this.todolist.splice(index,1);
    console.log(index)
  }



}
