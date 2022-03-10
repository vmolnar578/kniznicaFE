import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Borrowing} from "../models/borrowing.model";

@Component({
  selector: 'app-borrowings-form',
  templateUrl: './borrowings-form.component.html',
  styleUrls: ['./borrowings-form.component.css']
})
export class BorrowingsFormComponent implements OnInit {
  borrowing = {id: '', book: '', user: ''};
  constructor() { }
  @Output() borrowingEmitter = new EventEmitter<Borrowing>();
  ngOnInit(): void {
  }
  public addBorrowing() {
    this.borrowingEmitter.emit(this.borrowing);
  }
}
