import {Component, OnInit, Output} from '@angular/core';
import {User} from "../models/user.model";
import {UsersService} from "../../users.service";

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  constructor(private usersService: UsersService) { }
  users: User[] = [];
  ngOnInit(): void {
  }
  refresh() {
    this.usersService.getCustomers().subscribe( u => {
      this.users = u;
    });
  }
  public pushUser(user: User) {
    this.usersService.createCustomer(user).subscribe( () => {
      this.refresh();
    });
  }
}
