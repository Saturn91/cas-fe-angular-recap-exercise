import { InjectionToken } from "@angular/core";
import { Subject } from "rxjs";
import { ToDoAction } from "./actions.type";

export const fluxDispatcherToken = new InjectionToken('fluxActions');

export const fluxActionSubject = new Subject<ToDoAction>();

export const FLUX_CONFIG = [
  { provide: fluxDispatcherToken, useValue: fluxActionSubject}
]
