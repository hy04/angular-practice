import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';

//import services
import { StorageService } from './services/storage.service';
import { Home2Component } from './components/home2/home2.component';
import { ViewchildComponent } from './components/viewchild/viewchild.component';
import { Header2Component } from './components/header2/header2.component';
import { TransitionComponent } from './components/transition/transition.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    HeaderComponent,
    FormComponent,
    SearchComponent,
    TodolistComponent,
    Home2Component,
    ViewchildComponent,
    Header2Component,
    TransitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
