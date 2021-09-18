import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ToDoManagerComponent } from './to-do-manager/to-do-manager.component';

const routes: Routes = [
  {path: 'todos', component: ToDoManagerComponent},
  {path: 'about', component: AboutComponent},
  { path: '',   redirectTo: '/todos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
