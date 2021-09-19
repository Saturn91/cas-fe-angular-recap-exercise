import { NgPluralCase } from "@angular/common";
import { ToDoItem } from "src/app/models/todo.model";

const todoStoragePath = 'todos/';
const todosStored = 'stored';
const todosListStored = 'todos';

function getToDoSubPath(subPath: string) {
  return todoStoragePath + subPath;
}

export function hasToDosStored(): boolean {
  return localStorage.getItem(getToDoSubPath(todosStored)) != null;
}

export function save(todos: ToDoItem[]): void {
  console.log('save!');
  console.log(todos);
  localStorage.setItem(getToDoSubPath(todosStored), 'true');
  localStorage.setItem(getToDoSubPath(todosListStored), JSON.stringify(todos));
}

export function loadTodos(): ToDoItem[] {
  if(!hasToDosStored) return [];
  let jsonString: string | null = localStorage.getItem(getToDoSubPath(todosListStored));
  return JSON.parse(jsonString? jsonString : '') as ToDoItem[];
}
