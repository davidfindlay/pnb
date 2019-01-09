import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {UserService} from '../services/user.service';
import {Album} from '../models/album';
import {Profile} from '../models/profile';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) {
    this.user = new User();
    this.user.profile = new Profile();
  }

  ngOnInit() {
  }

  onSubmit() {

    if (this.user.password !== this.user.confirmpassword) {
      console.log('Passsword\'s don\'t match!');
      return;
    }

    this.userService.newUser(this.user).subscribe((data) => {
        console.log('submitted new user');
        console.log(data);
      },
      (error) => {
        console.log('error submitting new user');
        console.log(error);
      }
    );
  }

}
