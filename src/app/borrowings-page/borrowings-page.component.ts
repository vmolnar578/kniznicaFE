import {Component, OnInit, Output} from '@angular/core';
import {Borrowing} from "../models/borrowing.model";

@Component({
  selector: 'app-borrowings-page',
  templateUrl: './borrowings-page.component.html',
  styleUrls: ['./borrowings-page.component.css']
})
export class BorrowingsPageComponent implements OnInit {

  constructor() { }
  @Output()borrowings: Borrowing[] = [];
  ngOnInit(): void {
  }
  public pushBorrowing($event: Borrowing) {
    let borrowing = new Borrowing($event)
    this.borrowings.push(borrowing);
  }
}
