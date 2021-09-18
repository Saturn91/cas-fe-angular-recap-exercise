import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../models/todo.model';

@Component({
  selector: 'app-to-do-manager',
  templateUrl: './to-do-manager.component.html',
  styleUrls: ['./to-do-manager.component.scss']
})
export class ToDoManagerComponent implements OnInit {
  public todos: ToDoItem[] = [
    new ToDoItem(0, "Make laundry", false),
    new ToDoItem(1, "Clean kitchen", false),
    new ToDoItem(2, "Pay bills", false)
  ]

  constructor() {

  }

  ngOnInit(): void {

  }

}
