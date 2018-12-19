import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {AuthenticationService} from '../authentication';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;
  returnUrl: string;
  authFailed: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthenticationService) { this.user = new User(); }

  ngOnInit() {

    // Reset login status
    this.authService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  onSubmit() {
    this.authFailed = false;
    const obs = this.authService.login(this.user.username, this.user.password);
    obs.subscribe((data) => {
      console.log(data);
      if (this.authService.isAuthorized()) {
        this.router.navigateByUrl(this.returnUrl);
      }
    },
      (err) => {
      console.log(err);
      this.authFailed = true;
      });
  }

}
