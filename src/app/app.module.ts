import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwowayComponent } from './twoway/twoway.component';
import { TwowaydatabindingComponent } from './components/twowaydatabinding/twowaydatabinding.component';
import { FormsModule } from '@angular/forms';
import { DependencyinjectionComponent } from './components/dependencyinjection/dependencyinjection.component';
// import { API_BASE_URL } from './app.tokens';
import{HttpClientModule} from '@angular/common/http';
import { RoutingappComponent } from './components/routingapp/routingapp.component';
import { DirectivesappComponent } from './components/directivesapp/directivesapp.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TodolistComponent } from './components/todolist/todolist.component'

@NgModule({
  declarations: [
    AppComponent,
    TwowayComponent,
    TwowaydatabindingComponent,
    DependencyinjectionComponent,
    RoutingappComponent,
    DirectivesappComponent,
    UserListComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
// {provide: API_BASE_URL, useValue:'https://jsonplaceholder.typicode.com/posts/1/comments'}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
