import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Role } from '../../../../models/Role';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css',
})
export class LanguagesComponent {
  constructor(private toastr: ToastrService) {
    // this.countUsersByRole();
  }

  ngOnInit(): void {}
  head: any[] = [
    { Head: 'Language Name', Field: 'lName' },
    { Head: 'STATUS', Field: 'status' },
  ];

  languages: any[] = [
    { id: 1, lName: 'Urdu', status: true },
    { id: 2, lName: 'English', status: false },
    { id: 4, lName: 'Pashto', status: true },
    { id: 3, lName: 'Pashto', status: true },
    { id: 5, lName: 'Pashto', status: true },
    { id: 6, lName: 'Pashto', status: true },
    { id: 7, lName: 'Pashto', status: true },
    { id: 8, lName: 'Pashto', status: true },
    { id: 9, lName: 'Pashto', status: true },
    { id: 10, lName: 'Pashto', status: true },
    { id: 11, lName: 'Pashto', status: true },
    { id: 12, lName: 'Pashto', status: true },
    { id: 13, lName: 'Pashto', status: true },
    { id: 14, lName: 'Pashto', status: true },
    { id: 15, lName: 'Pashto', status: true },
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
  newLanguage: any = {
    lName: '',
    isActive: false,
  };

  addLanguageSubmit() {
    console.log(this.newLanguage);
    this.toastr.success('Successfully', 'Role is Succesfully added...');
  }

  private modalService = inject(NgbModal);
  addLanguageOpen(content: TemplateRef<any>) {
    this.modalService.open(content).result.then(
      (result) => {
        if (result == 'save') {
          // Save Buton Clicked
          if (
            this.newLanguage.roleName.trim() === '' ||
            this.newLanguage.roleName == null
          ) {
            this.toastr.warning('Please enter role name');
            return;
          }
          this.addLanguageSubmit();
        }
      },
      (reason) => {
        // Dismissed Modal Clicked otside the modal
        console.log('dismissed modal', reason);
      }
    );
  }

  // LANGUAGES ACTIONS-----------------------------
  eLanguage: any;
  editLanguageOpen(content: TemplateRef<any>, language: any) {
    this.eLanguage = language;
    this.modalService.open(content).result.then(
      (result) => {
        if (result == 'save') {
          this.updateLanguage(language);
          this.toastr.success(
            'Successfully',
            'Language is successfully updated...'
          );
        }
      },
      (reason) => {
        console.log('dismissed modal', reason);
      }
    );
  }

  updateLanguage(langauge: any) {
    console.log(langauge);
  }

  deleteLangauge(language: any) {
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
        this.languages = this.languages.filter((l) => l.id !== language.id);
        Swal.fire({
          title: 'Deleted!',
          text: 'Your language has been deleted.',
          icon: 'success',
        });
      }
    });
  }
}
