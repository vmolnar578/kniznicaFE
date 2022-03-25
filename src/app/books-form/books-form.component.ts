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
      name: new FormControl(null),
      author: new FormControl(null),
      available: new FormControl(null)
    });
  }

  public addBook() {
    this.bookEmitter.emit({
      id: Math.round(Math.random() * 500).toString(),
      name: this.bookForm.value.name,
      author: this.bookForm.value.author,
      available: this.bookForm.value.available});
    this.bookForm.reset();
  }
  public editBook(): void {
    this.editBookEmitter.emit(this.bookForm.value);
    this.bookForm.reset();
  }
}
