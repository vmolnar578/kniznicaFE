import {Component, Input, OnInit, Output} from '@angular/core';
import {User} from "../models/user.model";

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  constructor() { }
  @Output()users: User[] = [];
  ngOnInit(): void {
  }
  public pushUser($event: User) {
    let user = new User($event)
    this.users.push(user);
  }
}
