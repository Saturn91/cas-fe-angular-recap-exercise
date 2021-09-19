import { PipeTransform, Pipe } from "@angular/core";
import { ToDoItem } from "src/app/models/todo.model";

@Pipe({name: 'todosPipe'})
export class ToDoPipe implements PipeTransform {
  transform(value: ToDoItem[], done: boolean) {
    return value?.length ? value.filter(todo => todo.done == done && todo.deleted == false) : value;
  }
}
