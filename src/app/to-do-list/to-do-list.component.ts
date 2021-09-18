import { Component, Input, OnInit } from '@angular/core';
import { ToDoItem } from '../models/todo.model';

@Component({
  selector: 'ToDoList',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  @Input()
  public todos: ToDoItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
