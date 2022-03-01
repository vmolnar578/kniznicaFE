import { Component } from '@angular/core';
enum MENU { USERS, BOOKS, BORROWINGS}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kniznicaFE';
  aktMenu: MENU = MENU.USERS;
  menu = MENU;

  users: any = [];
  user = {id: '', name: '', contact: ''};
  addUser() {
    this.users.push({
      id: this.user.id,
      name: this.user.name,
      contact: this.user.contact
    })
  }
 
  books: any = [];
  book = {id: '', name: '', author: '', available: ''};
  addBook() {
    this.books.push({
      id: this.book.id,
      name: this.book.name,
      author: this.book.author,
      available: this.book.available
    });
  }
 
  borrowings: any = [];
  borrowing = {id: '', book: '', user: ''};
  addBorrowing() {
    this.borrowings.push({
      id: this.borrowing.id,
      book: this.borrowing.book,
      user: this.borrowing.user
    });
  }
}
