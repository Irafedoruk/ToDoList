import { Component } from '@angular/core';
import { ITodo } from '../todo';
import { TODOS } from '../todo-mock';
import { TodoItemComponent} from "../todo-item/todo-item.component";
import { CreateTodoComponent } from '../create-todo/create-todo.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent, CreateTodoComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos: ITodo[] = [...TODOS];
  filteredTodos: ITodo[] = [];

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

  sortTodosByDeadline() {    
    this.todos.sort((a, b) => {
      return a.deadline.getTime() - b.deadline.getTime();
    });
  }

  showPrioritiesOnly() {
    this.filteredTodos = this.todos.filter(todo => todo.priority === '!');
  }

  createTodo (todo: ITodo) {
    this.todos.push(todo);
    this.filteredTodos = this.todos.filter(todo => todo.priority === '!');
  }

  
}
