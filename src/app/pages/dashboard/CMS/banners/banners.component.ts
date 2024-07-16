import { Component, TemplateRef, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrl: './banners.component.css',
})
export class BannersComponent {
  constructor() {}

  banners: any[] = [
    { bId: '1', banner: 'assets/1.jpg', order: '1', language: 'en' },
    { bId: '2', banner: 'assets/2.jpg', order: '2', language: 'en' },
    { bId: '3', banner: 'assets/3.jpg', order: '3', language: 'en' },
    { bId: '4', banner: 'assets/4.jpg', order: '4', language: 'en' },
    { bId: '5', banner: 'assets/5.jpg', order: '5', language: 'en' },
  ];

  private modalService = inject(NgbModal);
  banner: any = {};

  editRoleOpen(content: TemplateRef<any>, b: any) {
    this.banner = b;
    this.modalService.open(content).result.then(
      (result) => {
        if (result == 'close') {
        }
      },
      (reason) => {
        console.log('dismissed modal', reason);
      }
    );
  }

  deleteBanner() {
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
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
      }
    });
  }
}
