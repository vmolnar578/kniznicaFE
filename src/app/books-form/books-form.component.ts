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
  set book(b: Book) {
    if (b) { this.fillFormGroup(b); }
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
  private fillFormGroup(book: Book) {
    this.bookForm.controls['id'].setValue(book.id);
    this.bookForm.controls['name'].setValue(book.name);
    this.bookForm.controls['author'].setValue(book.author);
    this.bookForm.controls['available'].setValue(book.available);
  }

  public addBook() {
    this.bookEmitter.emit({
      id: Math.random().toString(),
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
