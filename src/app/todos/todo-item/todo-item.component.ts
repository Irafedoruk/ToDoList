import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ITodo } from '../todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  isDone: boolean = false;
  priority: boolean = false;
  deadline: Date = new Date;

  @Output() deleteEvent = new EventEmitter<number>();

  @Input()
  todo: ITodo = {
    id: 0,
    title: "",
    isDone: false,
    deadline: new Date()
  }
  
  onClick() {
    this.todo.isDone = !this.todo.isDone;    
  }
  onDelete() {
    this.deleteEvent.emit(this.todo.id); 
  }

  formatDeadline(deadline: Date): string {
    return deadline ? deadline.toDateString() : '';
  }  
  
}


