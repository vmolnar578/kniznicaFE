import { Component } from '@angular/core';
enum MENU { USERS, BOOKS, BORROWINGS}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kniznicaFE';
  aktMenu: MENU = MENU.USERS;
  menu = MENU;
}
