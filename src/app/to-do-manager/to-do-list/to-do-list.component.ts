import { Component, Input, OnInit } from '@angular/core';
import { ToDoItem } from '../../models/todo.model';
import { ToDoPipe } from '../services/todo.pipe';

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
