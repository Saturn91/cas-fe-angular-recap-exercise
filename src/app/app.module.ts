import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoManagerComponent } from './to-do-manager/to-do-manager.component';
import { AboutComponent } from './about/about.component';
import { AddNewToDoComponent } from './to-do-manager/add-new-to-do/add-new-to-do.component';
import { ToDoListComponent } from './to-do-manager/to-do-list/to-do-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FLUX_CONFIG } from './to-do-manager/services/flux.configuration';
import { FluxToDoStore } from './to-do-manager/services/flux-todo-store.service';
import { ItemViewComponent } from './to-do-manager/item-view/item-view.component';
import { ToDoPipe } from './to-do-manager/services/todo.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ToDoManagerComponent,
    AboutComponent,
    AddNewToDoComponent,
    ToDoListComponent,
    ItemViewComponent,
    ToDoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [...FLUX_CONFIG, FluxToDoStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
