import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { User } from '../../../models/User';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  constructor(
    private _login: LoginService,
    private router: Router,
    private authService: AuthService
  ) {}

  isloggedIn: boolean = false;
  ngOnInit(): void {
    this.isloggedIn = this._login.isLoggedIn();
    if (this.isloggedIn) {
      this.router.navigate(['/dashboard']);
    }
  }

  loginData: any = {
    username: '',
    password: '',
  };

  login() {
    const user = new User(1, 'name1', 'username1', 'password1', 'admin');
    this._login.loginUser(user);
    this.router.navigate(['/dashboard']);
  }

  // login() {
  //   this.authService
  //     .authenticate(this.loginData.username, this.loginData.password)
  //     .subscribe(
  //       (user) => {
  //         if (user.length > 0) {
  //           this.authService.setUserToLocalStorage(user);
  //           window.location.reload();
  //         } else {
  //           console.log('User not found');
  //         }
  //       },
  //       (err) => {
  //         console.log(err);
  //       }
  //     );
  //   this.router.navigate(['/dashboard']);
  // }
}
