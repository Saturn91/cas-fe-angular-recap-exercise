import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'AddNewToDo',
  templateUrl: './add-new-to-do.component.html',
  styleUrls: ['./add-new-to-do.component.scss']
})
export class AddNewToDoComponent implements OnInit {
  public newToDoForm = new FormGroup({
    description: new FormControl(null, [Validators.required])
  });

  constructor() { }

  AddNewTodo() {
    if(this.newToDoForm.valid && this.newToDoForm.dirty) {
      alert("Add new Todo: " + this.newToDoForm.value.description);
    } else {
      alert("a description is required!");
    }
  }

  ngOnInit(): void {
  }

}
