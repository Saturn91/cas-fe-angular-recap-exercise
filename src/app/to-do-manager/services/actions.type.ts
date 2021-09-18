export enum ToDoActionTypes {
  Add,
  Done,
  UnDone,
  Load
}

export class ToDoAction {
  constructor(public type: ToDoActionTypes, public id?:number, public description?:string) { }
}
