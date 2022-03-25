import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../models/book.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.css']
})
export class BooksFormComponent implements OnInit {
  bookForm: FormGroup;
  @Input()
  set book(b: Book | undefined) {
    if (b) { this.bookForm.setValue(b); }
  }
  @Output() bookEmitter = new EventEmitter<Book>();
  ngOnInit(): void {
  }
  @Output() editBookEmitter = new EventEmitter<Book>();
  constructor() {
    this.bookForm = new FormGroup({
      id: new FormControl(null),
      title: new FormControl(null),
      isbn: new FormControl(null),
      authorLastname: new FormControl(null),
      authorFirstname: new FormControl(null),
      count: new FormControl(null)
    });
  }

  public addBook() {
    this.bookEmitter.emit({
      id: this.bookForm.value.id,
      title: this.bookForm.value.title,
      authorFirstname: this.bookForm.value.authorFirstname,
      authorLastname: this.bookForm.value.authorLastname,
      isbn: this.bookForm.value.isbn,
      count: this.bookForm.value.count});
    this.bookForm.reset();
  }
  public editBook(): void {
    this.editBookEmitter.emit(this.bookForm.value);
    this.bookForm.reset();
  }
}
