import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../models/book.model";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  @Input()
  books: Book[] = [];
  @Output()
  editBook: EventEmitter<Book> = new EventEmitter<Book>();
  @Output()
  deleteBook: EventEmitter<Book> = new EventEmitter<Book>();
  edit(book: Book): void {
    this.editBook.emit(book);
  }

  delete(book: Book): void {
    this.deleteBook.emit(book);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
