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
    return this.http.get<User[]>('/api/users');
  }

  getUserDetails(userId) {
    return this.http.get<User>('/api/users/' + userId);
  }

  newUser(user) {
    return this.http.post('/api/register/', user, httpOptions);
  }

  updateUser(user_id, user) {
    return this.http.patch('/api/users/' + user_id + '/', user, httpOptions);
  }

}
