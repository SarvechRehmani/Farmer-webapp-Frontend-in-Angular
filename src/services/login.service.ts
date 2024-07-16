import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  loginUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    if (localStorage.getItem('user') !== null) {
      return JSON.parse(String(localStorage.getItem('user')));
    }
  }
  checkRoleOfUser() {
    let user: User = this.getUser();
    if (user !== null) {
      return user.role;
    }
    return null;
  }

  logoutUser() {
    localStorage.removeItem('user');
    window.location.reload();
  }

  isLoggedIn() {
    return localStorage.getItem('user') !== null;
  }
}
