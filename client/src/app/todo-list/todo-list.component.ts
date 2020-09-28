import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { TodoApi } from '../shared/sdk/index';
import {Todo} from '../shared/sdk/index';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  todo: Todo;
  enableEdit=false;
  currentTodoItem: Todo;
  newText='';
  todoList:string;
  currentTodoId:number;
  constructor(private dataService:DataService, private todoApi: TodoApi) { }

  ngOnInit(): void {
    this.listTodo();
  }
  listTodo(){
    this.todoApi.find().subscribe((data: Todo[])=>{
      this.todos=data;
    });
  }
  deleteItem(todo: Todo){
    this.todoApi.deleteById(todo.id).subscribe((count: number)=>{
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    })
    }
  editItem(todo: Todo){
    this.enableEdit=true;
    this.currentTodoItem=todo;
    this.currentTodoId=todo.id;
  }
  editCurrentItem(){
    this.todoApi.patchAttributes(this.currentTodoId,this.currentTodoItem).subscribe((data: Todo)=>{
      var index = this.todos.indexOf(this.currentTodoItem);
      this.todos.splice(index, 1);
      this.todos.push(data);
    })
  }
}
