import { Component, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private _login: LoginService) {}

  logout() {
    this._login.logoutUser();
  }
}
