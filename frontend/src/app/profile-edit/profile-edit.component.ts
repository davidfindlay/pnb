import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {UserService} from '../services/user.service';
import {Profile} from '../models/profile';
import {AuthenticationService} from '../authentication';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  user: User;
  userId: Number;

  password_incorrect = false;
  success = false;

  constructor(private userService: UserService,
              private authService: AuthenticationService,
              private spinner: NgxSpinnerService) {
    this.user = new User();
    this.user.profile = new Profile();
  }

  ngOnInit() {
    this.spinner.show();

    this.authService.getAccessToken().subscribe((accessToken) => {
      this.userId = this.authService.decodeUserId(accessToken);

      this.userService.getUserDetails(this.userId).subscribe(
        (user: User) => {

          if (user.profile == null) {
            user.profile = new Profile();
          }

          this.user = user;
          this.spinner.hide();
        }
      );
    });

  }

  onSubmit() {

    console.log(this.user);

    this.userService.updateUser(this.userId, this.user).subscribe((data) => {
        console.log('update user ' + this.userId);
        console.log(data);
        this.password_incorrect = false;
        this.success = true;
      },
      (error) => {

        this.success = false;

        if ('password' in error.error) {
          this.password_incorrect = true;
        }

        console.log('error submitting profile edit');
        console.log(error);
      }
    );
  }

}
