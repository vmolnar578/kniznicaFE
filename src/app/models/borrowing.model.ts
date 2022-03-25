export class Borrowing{
  id:number;
  bookId:number;
  customerId:number;

  constructor(borrowing:Borrowing) {
    this.id = borrowing.id;
    this.bookId = borrowing.bookId;
    this.customerId = borrowing.customerId;
  }
}
