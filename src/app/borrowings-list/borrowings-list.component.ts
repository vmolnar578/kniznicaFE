import {Component, Input, OnInit} from '@angular/core';
import {Borrowing} from "../models/borrowing.model";

@Component({
  selector: 'app-borrowings-list',
  templateUrl: './borrowings-list.component.html',
  styleUrls: ['./borrowings-list.component.css']
})
export class BorrowingsListComponent implements OnInit {
  @Input()borrowings: Borrowing[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
