import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoManagerComponent } from './to-do-manager/to-do-manager.component';
import { AboutComponent } from './about/about.component';
import { AddNewToDoComponent } from './add-new-to-do/add-new-to-do.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToDoManagerComponent,
    AboutComponent,
    AddNewToDoComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
