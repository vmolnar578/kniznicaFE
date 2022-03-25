import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../models/user.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {
  userForm: FormGroup;
  @Input()
  set user(u: User | undefined) {
    if (u) { this.userForm.setValue(u); }
  }
  @Output() userEmitter = new EventEmitter<User>();
  constructor() {
    this.userForm = new FormGroup({
      id: new FormControl(Math.round(Math.random() * 500)),
      firstname: new FormControl(null),
      lastname: new FormControl(null),
      contact: new FormControl(null),
    });
  }

  ngOnInit(): void {
  }

  public addUser() {
    this.userEmitter.emit({
      id: this.userForm.value.id,
      firstname: this.userForm.value.firstname,
      lastname: this.userForm.value.lastname,
      contact: this.userForm.value.contact,
    });
    this.userForm.reset();
  }
}
