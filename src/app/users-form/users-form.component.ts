import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Book} from "../models/book.model";
import {User} from "../models/user.model";

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {
  user = {id: '', name: '', contact: ''};
  constructor() { }

  ngOnInit(): void {
  }
  @Output() userEmitter = new EventEmitter<User>();

  public addUser() {
    this.userEmitter.emit(this.user);
  }
}
