import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "./app/models/book.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private apiUrl = 'http://localhost:8080/api/books';
  constructor(private http: HttpClient) {
  }
  createBook(b: Book): Observable<Book> {
    return this.http.post<Book>(`${this.apiUrl}`, b);
  }
  getBook(bookID: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${bookID}`);
  }
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}`);
  }
  deleteBook(bookID: number | undefined) {
    return this.http.delete(`${this.apiUrl}/${bookID}`)
  }
  updateBook(bookID: number | undefined, b: Book) {
    return this.http.put<Book>(`${this.apiUrl}/${bookID}`, b);
  }
}
