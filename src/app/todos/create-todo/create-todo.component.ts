import { Component, EventEmitter, Output } from '@angular/core';
import { ITodo } from '../todo';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.css'
})
export class CreateTodoComponent {

  @Output() createEvent = new EventEmitter<ITodo>();

  createForm = this.fb.group({
    title: ['', Validators.required],
    isDone: [false],
    priority: [''],
    deadline: [new Date()]
  });
  constructor (private fb:FormBuilder) {

  }

  onSubmit() {
    if (!this.createForm.valid) {
      alert("Invalid data!");
      return;
    }

    const todo = this.createForm.value as ITodo;
    
    this.createEvent.emit(todo);
  }
}


