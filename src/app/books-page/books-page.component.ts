import {Component, OnInit} from '@angular/core';
import {Book} from "../models/book.model";
import {BooksService} from "../../books.service";

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {
  constructor(private booksService: BooksService) { }
  books: Book[] = [];
  bookEditing?: Book;
  ngOnInit(): void {
    this.refresh();
  }
  refresh(): void {
    this.booksService.getBooks().subscribe(b => {
      this.books = b;
    });
  }
  pushBook(book: Book): void {
    this.booksService.createBook(book).subscribe( () => {
      this.refresh();
    });
  }
  editBook(book: Book): void {
    this.booksService.updateBook(book.id, book).subscribe( () => {
      this.refresh();
    });
  }

  editBookFromList(book: Book): void {
    this.bookEditing = book;
  }

  deleteBookFromList(book: Book): void {
    this.booksService.deleteBook(book.id).subscribe( () => {
      this.refresh();
    });
  }
}
