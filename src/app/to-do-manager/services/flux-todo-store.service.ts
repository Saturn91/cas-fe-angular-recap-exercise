import { Inject, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ToDoItem } from "src/app/models/todo.model";
import { cloneArray } from "src/app/shared/helpers.util";
import { ToDoAction, ToDoActionTypes } from "./actions.type";
import { fluxDispatcherToken } from "./flux.configuration";

@Injectable()
export class FluxToDoStore {
  public todos: ToDoItem[] = [];
  private orig: ToDoItem[] = [
    new ToDoItem(1, "Make laundry", true),
    new ToDoItem(2, "Clean kitchen", false),
    new ToDoItem(3, "Pay bills", false)
  ]

  constructor(@Inject(fluxDispatcherToken) private dispatcher: Subject<ToDoAction>) {
    this.dispatcher.subscribe((action: ToDoAction) => {
      let item: ToDoItem = {} as ToDoItem;
      if(action.id) item = this.todos?.filter((todo) => todo.id == action.id)[0] as ToDoItem;

      switch (action.type) {
        case ToDoActionTypes.Add:
          this.todos.push(new ToDoItem(this.todos.length+1, action.description ? action.description: '', false))
          this.todos = cloneArray(this.todos);
          break;
        case ToDoActionTypes.Done:
          item.done = true;
          this.todos = cloneArray(this.todos);
          break;
        case ToDoActionTypes.UnDone:
          item.done = false;
          this.todos = cloneArray(this.todos);
          break;
        case ToDoActionTypes.Load:
          if(this.todos.length == 0) {
            this.todos = cloneArray(this.orig);
          }
          break;
        case ToDoActionTypes.Reset:
          this.todos = cloneArray(this.orig);
          break;
      }
    });
  }
}
