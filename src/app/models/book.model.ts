export class Book{
  id?:number;
  title:string;
  isbn:string;
  authorLastname:string;
  authorFirstname:string;
  count:number;

  constructor(book: Book) {
    this.id = book.id;
    this.title = book.title;
    this.authorFirstname = book.authorFirstname;
    this.authorLastname = book.authorLastname;
    this.count = book.count;
    this.isbn = book.isbn;
  }
}
