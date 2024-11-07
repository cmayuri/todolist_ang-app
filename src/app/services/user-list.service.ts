import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
private users: User[]=[
  { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
]
  getUsers(): Observable<User[]>{
    console.log(this.users);
     return of(this.users);
  }
  

  constructor() { }

  
}
