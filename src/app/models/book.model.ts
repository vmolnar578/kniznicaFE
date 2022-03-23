export class Book{
  id?:string;
  name:string;
  author:string;
  available:string;

  constructor(id: string, name: string, author: string , available: string) {
    this.id= id;
    this.name= name;
    this.author= author;
    this.available= available;
  }
}
