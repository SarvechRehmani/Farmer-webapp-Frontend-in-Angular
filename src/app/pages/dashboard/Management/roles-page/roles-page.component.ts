import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Role } from '../../../../../models/Role';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-roles-page',
  templateUrl: './roles-page.component.html',
  styleUrl: './roles-page.component.css',
})
export class RolesPageComponent implements OnInit {
  constructor(private toastr: ToastrService) {
    // this.countUsersByRole();
  }

  ngOnInit(): void {}
  head: any[] = [
    { Head: 'ROLE  NAME', Field: 'roleName' },
    { Head: 'STATUS', Field: 'status' },
  ];

  roles: Role[] = [
    { id: 1, roleName: 'Manager', status: true },
    { id: 2, roleName: 'Admin', status: false },
    { id: 3, roleName: 'User', status: true },
    { id: 4, roleName: 'Manager', status: false },
    { id: 5, roleName: 'Administrator', status: false },
    { id: 6, roleName: 'Administrator', status: true },
    { id: 7, roleName: 'Administrator', status: true },
    { id: 8, roleName: 'Administrator', status: false },
    { id: 9, roleName: 'Administrator', status: true },
    { id: 10, roleName: 'Manager', status: false },
    { id: 11, roleName: 'Administrator', status: false },
    { id: 12, roleName: 'Manager', status: false },
    { id: 13, roleName: 'Administrator', status: false },
    { id: 14, roleName: 'Administrator', status: true },
  ];

  // changeRole(user: any) {
  //   console.log(this.users);
  //   this.countUsersByRole();
  //   console.log(user);
  // }

  // COUNT ROLES BY USERS
  // userCountByRole: { [role: string]: number } = {};
  // countUsersByRole(): void {
  //   this.userCountByRole = {};
  //   for (let user of this.users) {
  //     if (this.userCountByRole[user.role]) {
  //       this.userCountByRole[user.role]++;
  //     } else {
  //       this.userCountByRole[user.role] = 1;
  //     }
  //   }
  //   console.log(this.userCountByRole);
  // }

  // ADD ROLE
  newRole: any = {
    roleName: '',
    isActive: false,
  };

  private modalService = inject(NgbModal);
  addRoleOpen(content: TemplateRef<any>) {
    this.modalService.open(content).result.then(
      (result) => {
        if (result == 'save') {
          // Save Buton Clicked
          if (
            this.newRole.roleName.trim() === '' ||
            this.newRole.roleName == null
          ) {
            this.toastr.warning('Please enter role name');
            return;
          }
          this.addRoleSubmit();
        }
      },
      (reason) => {
        // Dismissed Modal Clicked otside the modal
        console.log('dismissed modal', reason);
      }
    );
  }

  addRoleSubmit() {
    console.log(this.newRole);
    this.toastr.success('Successfully', 'Role is Succesfully added...');
  }

  // Editing Role -------------------------
  eRole: any;
  editRoleOpen(content: TemplateRef<any>, role: Role) {
    this.eRole = role;
    this.modalService.open(content).result.then(
      (result) => {
        if (result == 'save') {
          this.uppdateRole(this.eRole);
          this.toastr.success(
            'Successfully',
            'Role is successfully updated...'
          );
        }
      },
      (reason) => {
        console.log('dismissed modal', reason);
      }
    );
  }

  uppdateRole(role: any) {
    console.log(role);
  }

  // Deleting Role----------------
  deleteRole(role: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.roles = this.roles.filter((r) => r.id !== role.id);
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
      }
    });
  }
}
