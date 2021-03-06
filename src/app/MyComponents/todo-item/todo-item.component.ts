import { Input, Output } from '@angular/core'
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: Todo = new Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo : Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been triggered")
  }

  onCheckboxClick(todo : Todo){
    this.todoCheckbox.emit(todo);
  }

}
