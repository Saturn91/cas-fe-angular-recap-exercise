import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ToDoAction, ToDoActionTypes } from '../services/actions.type';
import { FluxToDoStore } from '../services/flux-todo-store.service';
import { fluxDispatcherToken } from '../services/flux.configuration';

@Component({
  selector: 'AddNewToDo',
  templateUrl: './add-new-to-do.component.html',
  styleUrls: ['./add-new-to-do.component.scss']
})
export class AddNewToDoComponent implements OnInit {
  public newToDoForm = new FormGroup({
    description: new FormControl(null, [Validators.required])
  });

  constructor(public store: FluxToDoStore, @Inject(fluxDispatcherToken) private dispatcher: Subject<ToDoAction>) { }

  AddNewTodo() {
    if(this.newToDoForm.valid && this.newToDoForm.dirty) {
      this.dispatcher.next(new ToDoAction(ToDoActionTypes.Add, undefined, this.newToDoForm.value.description));
      this.newToDoForm.reset();
    } else {
      alert("a description is required!");
    }
  }

  ngOnInit(): void {
  }

}
