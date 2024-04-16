import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoItemComponent } from "./todos/todo-item/todo-item.component";
import { TodoListComponent } from "./todos/todo-list/todo-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoItemComponent, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoList';
}
