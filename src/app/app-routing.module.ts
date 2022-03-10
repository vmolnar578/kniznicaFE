import {RouterModule, Routes} from "@angular/router";
import {UsersPageComponent} from "./users-page/users-page.component";
import {BorrowingsPageComponent} from "./borrowings-page/borrowings-page.component";
import {BooksPageComponent} from "./books-page/books-page.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: 'users',
    component: UsersPageComponent
  },
  {
    path: 'borrowings',
    component: BorrowingsPageComponent
  },
  {
    path: 'books',
    component: BooksPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
