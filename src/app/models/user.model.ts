export class User {
  id?: number;
  firstname: string;
  lastname: string;
  contact: string;

  constructor(user: User) {
    this.id = user.id;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.contact = user.contact;
  }
}

