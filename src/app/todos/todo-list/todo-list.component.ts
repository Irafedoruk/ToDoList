import { Component } from '@angular/core';
import { ITodo } from '../todo';
import { TODOS } from '../todo-mock';
import { TodoItemComponent} from "../todo-item/todo-item.component";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos: ITodo[] = [...TODOS];

  clear() {
    this.todos = [];
  }

  load() {
    this.todos = [...TODOS];
  }

  deleteTodo(id: number) {
    let index = this.todos.findIndex(x => x.id == id);
    this.todos.splice(index, 1);
  }
}
