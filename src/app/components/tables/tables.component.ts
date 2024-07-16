import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/User';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css',
})
export class TablesComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  head: any[] = [
    { Head: 'User name', Field: 'username' },
    { Head: 'Password', Field: 'password' },
    { Head: 'Role', Field: 'role' },
  ];

  users: User[] = [
    new User(1, 'name1', 'username1', 'password1', 'role1'),
    new User(2, 'name2', 'username2', 'password2', 'role2'),
    new User(3, 'name3', 'username3', 'password3', 'role3'),
    new User(4, 'name4', 'username4', 'password4', 'role4'),
    new User(5, 'name5', 'username5', 'password5', 'role5'),
    new User(6, 'name6', 'username6', 'password6', 'role6'),
    new User(7, 'name7', 'username7', 'password7', 'role7'),
    new User(8, 'name8', 'username8', 'password8', 'role8'),
    new User(9, 'name9', 'username9', 'password9', 'role9'),
  ]

  changeRole(user: any) {
    console.log(user);
  }
}
