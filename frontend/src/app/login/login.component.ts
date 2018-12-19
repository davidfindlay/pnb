import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {AuthenticationService} from '../authentication';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private authService: AuthenticationService) { this.user = new User(); }

  ngOnInit() {
  }

  onSubmit() {
    const obs = this.authService.login(this.user.username, this.user.password);
    obs.subscribe((data) => {
      console.log(data);
    },
      (err) => {
      console.log(err);
      });
  }

}
