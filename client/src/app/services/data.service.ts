import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todoArray=[];
  todoList:string;
  constructor(private http:HttpClient) { }
  getTodoList(){
    if(localStorage.getItem('todoArray')===null){
      this.todoArray=[];
    }
    else{
      this.todoArray=JSON.parse(localStorage.getItem('todoArray'));
    }
    // this.http.get("http://localhost:3000/todos").subscribe((data)=>{
    //   this.todoList=JSON.parse(JSON.stringify(data))
    // })
    return this.todoArray;
  }
  setTodoList(newtodoArr){
    this.todoArray=newtodoArr;
    localStorage.setItem('todoArray',JSON.stringify(this.todoArray));
  }
}
