import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: any[] = [];
  message: string = '';

  constructor(private service: TodoService) {}

  ngOnInit() {
      this.service.getTodos().subscribe(data => this.todos = data);
  }

  add() {
      var newTodo = {title: 'Todo1'};
      this.service.add(newTodo).subscribe(
          data => this.todos.push(data),
          err => this.message = err.message
      );
  }

  delete(id: number) {
      if(confirm('Are you sure?')) {
          this.service.delete(id).subscribe();
      }
  }

  loadAsync() {
    this.service.getTodosAsync().then(data => this.todos = data);
  }

}
