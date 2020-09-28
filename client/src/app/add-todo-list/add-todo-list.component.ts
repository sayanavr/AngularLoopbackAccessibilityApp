import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {Todo} from '../shared/sdk/index';
import {TodoApi} from '../shared/sdk/index';
@Component({
  selector: 'app-add-todo-list',
  templateUrl: './add-todo-list.component.html',
  styleUrls: ['./add-todo-list.component.css']
})
export class AddTodoListComponent implements OnInit {
  todos: Todo[];
  todo: Todo={
    'id':0,
    'text':"",
    'date':new Date,
    'completed':false
  };
  constructor(private dataService:DataService, private todoApi: TodoApi) { }

  ngOnInit(): void {
    this.todoApi.find().subscribe((data: Todo[])=>{
      this.todos=data;
    });
  }
  addTodo(){    
    if(this.todo.text==""){
      //setTimeout(function() {
        alert('Please enter a value!');
    //}, 200);
    }
    else{
      //this.todo.id=this.todos.length+1;
      this.todoApi.create(this.todo).subscribe((data:Todo)=>{
        this.todos.push(data);
      })
      alert(this.todo.text+' has been inserted!');
    }
    }
    
      keyDownFunction(event) {
        //Press enter to trigger btn click
        if (event.keyCode === 13) {
          event.preventDefault();
          let element: HTMLElement = document.getElementById('addBtn') as HTMLElement;
          element.click();
        }
      }
}
