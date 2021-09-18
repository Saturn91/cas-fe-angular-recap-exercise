import { Inject, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ToDoItem } from "src/app/models/todo.model";
import { ToDoAction, ToDoActionTypes } from "./actions.type";
import { fluxDispatcherToken } from "./flux.configuration";

@Injectable()
export class FluxToDoStore {
  public todos: ToDoItem[] = [];
  private orig: ToDoItem[] = [
    new ToDoItem(0, "Make laundry", false),
    new ToDoItem(1, "Clean kitchen", false),
    new ToDoItem(2, "Pay bills", false)
  ]

  constructor(@Inject(fluxDispatcherToken) private dispatcher: Subject<ToDoAction>) {
    this.dispatcher.subscribe((action: ToDoAction) => {
      let item: ToDoItem = {} as ToDoItem;
      if(action.id) item = this.todos?.filter((todo) => todo.id == action.id)[0] as ToDoItem;

      switch (action.type) {
        case ToDoActionTypes.Add:
          console.log('add new ToDo: ' + action.description);
          this.todos.push(new ToDoItem(this.todos.length, action.description ? action.description: '', false))
          break;
        case ToDoActionTypes.Done:
          break;
        case ToDoActionTypes.UnDone:
          break;
        case ToDoActionTypes.Load:
          //load from BE, but if null fill with placeholders
          this.todos = this.orig;
          break;
      }
    });
  }
}
