import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VoterComponent } from './01-voter/voter.component';
import { TodoComponent } from './02-todos/todo.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './03-user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './02-todos/todo.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    TodoComponent,
    UserComponent,
    NotFoundComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
