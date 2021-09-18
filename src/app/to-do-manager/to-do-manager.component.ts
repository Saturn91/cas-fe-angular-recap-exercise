import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../models/todo.model';

@Component({
  selector: 'app-to-do-manager',
  templateUrl: './to-do-manager.component.html',
  styleUrls: ['./to-do-manager.component.scss']
})
export class ToDoManagerComponent implements OnInit {
  public todos: ToDoItem[] = [
    new ToDoItem("Make laundry", false),
    new ToDoItem("Clean kitchen", false),
    new ToDoItem("Pay bills", false)
  ]

  constructor() {

  }

  ngOnInit(): void {

  }

}
