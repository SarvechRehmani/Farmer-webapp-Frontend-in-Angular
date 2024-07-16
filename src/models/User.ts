export class User {
  id: number;
  name: string;
  username: string;
  password: string;
  role: string;
  status: boolean;

  constructor(
    id: number,
    name: string,
    username: string,
    password: string,
    role: string,
    status: boolean = true
  ) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.password = password;
    this.role = role;
    this.status = status;
  }
}
