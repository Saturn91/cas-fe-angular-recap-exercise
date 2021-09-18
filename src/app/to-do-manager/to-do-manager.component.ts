import { Component, Inject, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ToDoItem } from '../models/todo.model';
import { ToDoAction, ToDoActionTypes } from './services/actions.type';
import { FluxToDoStore } from './services/flux-todo-store.service';
import { fluxDispatcherToken } from './services/flux.configuration';

@Component({
  selector: 'app-to-do-manager',
  templateUrl: './to-do-manager.component.html',
  styleUrls: ['./to-do-manager.component.scss']
})
export class ToDoManagerComponent implements OnInit {
  constructor(public store: FluxToDoStore, @Inject(fluxDispatcherToken) private dispatcher: Subject<ToDoAction>) {

  }

  ngOnInit(): void {
    this.dispatcher.next(new ToDoAction(ToDoActionTypes.Load));
  }

  Reset(): void {
    this.dispatcher.next(new ToDoAction(ToDoActionTypes.Reset));
  }

}
