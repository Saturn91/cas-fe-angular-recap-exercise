import { Inject, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ToDoItem } from "src/app/models/todo.model";
import { cloneArray } from "src/app/shared/helpers.util";
import { ToDoAction, ToDoActionTypes } from "./actions.type";
import { fluxDispatcherToken } from "./flux.configuration";
import { hasToDosStored, loadTodos, save } from "./todo-localstorage.service";

@Injectable()
export class FluxToDoStore {
  public todos: ToDoItem[] = [];
  private orig: ToDoItem[] = [
    new ToDoItem(1, "Make laundry", true, false),
    new ToDoItem(2, "Clean kitchen", false, false),
    new ToDoItem(3, "Pay bills", false, false)
  ]

  updateTodos() {
    this.todos = cloneArray(this.todos);
    save(this.todos);
  }

  constructor(@Inject(fluxDispatcherToken) private dispatcher: Subject<ToDoAction>) {
    this.dispatcher.subscribe((action: ToDoAction) => {
      let item: ToDoItem = {} as ToDoItem;
      if(action.id) item = this.todos?.filter((todo) => todo.id == action.id)[0] as ToDoItem;

      switch (action.type) {
        case ToDoActionTypes.Add:
          this.todos.push(new ToDoItem(this.todos.length+1, action.description ? action.description: '', false, false))
          this.updateTodos();
          break;
        case ToDoActionTypes.Done:
          item.done = true;
          this.updateTodos();
          break;
        case ToDoActionTypes.UnDone:
          item.done = false;
          this.updateTodos();
          break;
        case ToDoActionTypes.Load:
          if(this.todos.length == 0) {
            if(hasToDosStored()) {
              this.todos = loadTodos();
            } else {
              this.todos = cloneArray(this.orig);
            }
          }
          break;
        case ToDoActionTypes.Delete: {
          item.deleted = true;
          this.updateTodos();
          break;
        }
        case ToDoActionTypes.Reset:
          this.todos = cloneArray(this.orig);
          this.updateTodos();
          break;
      }
    });
  }
}
