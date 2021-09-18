import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ToDoManagerComponent } from './to-do-manager/to-do-manager.component';



export const routeNames = {
  todos: 'todos',
  about: 'about'
}

const routes: Routes = [
  {path: routeNames.todos, component: ToDoManagerComponent},
  {path: routeNames.about, component: AboutComponent},
  {path: '',   redirectTo: routeNames.todos, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
