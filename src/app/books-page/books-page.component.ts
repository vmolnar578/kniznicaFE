import {Component, OnInit} from '@angular/core';
import {Book} from "../models/book.model";

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {
  constructor() { }
  books: Book[] = [];
  bookEdit?: Book;
  ngOnInit(): void {
  }
  public pushBook(book: Book): void {
    this.books.push(book);
  }
  editBook(book: Book): void {
    const index = this.books.findIndex(bookArray => bookArray.id === book.id);
    if (index !== -1) {
      this.books[index] = book;
    }
  }

  editBookFromList(book: Book): void {
    this.bookEdit = book;
  }

  deleteBookFromList(book: Book): void {
    const index = this.books.findIndex(bookArray => bookArray.id === book.id);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }
}
