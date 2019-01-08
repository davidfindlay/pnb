import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Album} from '../models/album';
import {User} from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'dataType': 'json',
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers() {
    console.log('Users service getUsers()');
    return this.http.get<User[]>('/api/users');
  }

  getUserDetails(userId) {
    console.log('Users service getUserDetails');
    return this.http.get<User>('/api/users/' + userId);
  }

  newUser(user) {
    console.log('New User');
    return this.http.post('/api/users/', user, httpOptions);
  }

  updateUser(user) {
    console.log('Update User');
    return this.http.patch('/api/users/', user, httpOptions);
  }

}
