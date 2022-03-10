import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-borrowings-list',
  templateUrl: './borrowings-list.component.html',
  styleUrls: ['./borrowings-list.component.css']
})
export class BorrowingsListComponent implements OnInit {
  @Input()borrowings: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
