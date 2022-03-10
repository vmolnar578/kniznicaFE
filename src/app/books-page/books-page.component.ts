import {Component, OnInit, Output} from '@angular/core';
import {Book} from "../models/book.model";
import {User} from "../models/user.model";

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {
  constructor() { }
  @Output()books: Book[] = [];
  ngOnInit(): void {
  }
  public pushBook($event: Book) {
    let book = new Book($event)
    this.books.push(book);
  }
}
