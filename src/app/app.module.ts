import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BooksFormComponent } from './books-form/books-form.component';
import { BooksPageComponent } from './books-page/books-page.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BorrowingsFormComponent } from './borrowings-form/borrowings-form.component';
import { BorrowingsListComponent } from './borrowings-list/borrowings-list.component';
import { BorrowingsPageComponent } from './borrowings-page/borrowings-page.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersPageComponent } from './users-page/users-page.component';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BooksFormComponent,
    BooksPageComponent,
    BooksListComponent,
    BorrowingsFormComponent,
    BorrowingsListComponent,
    BorrowingsPageComponent,
    UsersFormComponent,
    UsersListComponent,
    UsersPageComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
