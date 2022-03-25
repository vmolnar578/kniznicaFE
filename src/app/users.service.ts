import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "./app/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}`);
  }

  getCustomer(customerId: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${customerId}`);
  }

  createCustomer(customer: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}`, customer);
  }
}
