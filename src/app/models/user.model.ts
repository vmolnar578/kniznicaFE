export class User {
  id: string;
  name: string;
  contact: string;

  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.contact = user.contact;
  }
}
