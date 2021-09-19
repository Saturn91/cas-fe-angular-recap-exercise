import { Component, Inject, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ToDoItem } from 'src/app/models/todo.model';
import { ToDoAction, ToDoActionTypes } from '../services/actions.type';
import { FluxToDoStore } from '../services/flux-todo-store.service';
import { fluxDispatcherToken } from '../services/flux.configuration';

@Component({
  selector: 'ItemView',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent implements OnInit {
  @Input()
  public todo: ToDoItem = new ToDoItem(-1, '', false, false);

  constructor(public store: FluxToDoStore, @Inject(fluxDispatcherToken) private dispatcher: Subject<ToDoAction>) { }

  ngOnInit(): void {
  }

  OnCheckBoxChange() {
    this.dispatcher.next(new ToDoAction(this.todo.done == true ? ToDoActionTypes.UnDone : ToDoActionTypes.Done, this.todo.id))
  }

  DeleteTodo() {
    this.dispatcher.next(new ToDoAction(ToDoActionTypes.Delete, this.todo.id));
  }

}
