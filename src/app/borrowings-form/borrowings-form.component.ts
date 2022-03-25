import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Borrowing} from "../models/borrowing.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-borrowings-form',
  templateUrl: './borrowings-form.component.html',
  styleUrls: ['./borrowings-form.component.css']
})
export class BorrowingsFormComponent implements OnInit {
  borrowingForm: FormGroup;
  @Input()
  set borrowing(b: Borrowing | undefined) {
    if (b) { this.borrowingForm.setValue(b); }
  }
  constructor() {
    this.borrowingForm = new FormGroup({
      id: new FormControl(Math.round(Math.random() * 500)),
      bookId: new FormControl(null),
      customerId: new FormControl(null),
    });
  }
  @Output() borrowingEmitter = new EventEmitter<Borrowing>();
  ngOnInit(): void {
  }
  public addBorrowing() {
    this.borrowingEmitter.emit({
      id: this.borrowingForm.value.id,
      bookId: this.borrowingForm.value.bookId,
      customerId: this.borrowingForm.value.customerId});
    this.borrowingForm.reset();
}
}
