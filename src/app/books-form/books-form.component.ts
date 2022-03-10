import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Book} from "../models/book.model";

@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.css']
})
export class BooksFormComponent implements OnInit {
  book = {id: '', name: '', author: '', available: ''};
  constructor() { }
  @Output() bookEmitter = new EventEmitter<Book>();
  ngOnInit(): void {
  }
  public addBook() {
    this.bookEmitter.emit(this.book);
  }
}
