import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgxSocialShareModule } from 'ngx-social-share';
import {SDKBrowserModule} from './shared/sdk/index';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoListComponent } from './add-todo-list/add-todo-list.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import {DataService} from './services/data.service';
import { NotfoundComponent } from './notfound/notfound.component'

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddTodoListComponent,
    HeaderComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSocialShareModule,
    SDKBrowserModule.forRoot()
  ],
  providers: [AppComponent,
              DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
