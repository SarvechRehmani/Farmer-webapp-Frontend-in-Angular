export class Role {
  id: number;
  roleName: string;
  status: boolean;

  constructor(id: number, roleName: string, status: boolean = true) {
    this.id = id;
    this.roleName = roleName;
    this.status = status;
  }
}
