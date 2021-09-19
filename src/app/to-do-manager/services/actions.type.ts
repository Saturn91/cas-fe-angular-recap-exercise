export enum ToDoActionTypes {
  Add,
  Done,
  UnDone,
  Load,
  Delete,
  Reset
}

export class ToDoAction {
  constructor(public type: ToDoActionTypes, public id?:number, public description?:string) { }
}
