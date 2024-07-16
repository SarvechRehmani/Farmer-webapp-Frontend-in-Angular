import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css',
})
export class AlertsComponent {
  constructor(private toastr: ToastrService) {}

  dangerAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    });
  }

  successAlert() {
    Swal.fire({
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: true,
      timer: 1500,
    });
  }

  warningAlert() {
    Swal.fire({
      icon: 'warning',
      title: 'Do you want to continue.',
      showConfirmButton: true,
      confirmButtonText: 'Yes',
      showCancelButton: true,
      cancelButtonText: 'No!',
    });
  }

  infoAlert() {
    Swal.fire({
      icon: 'info',
      title: 'You clicked the button!',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  successSnack() {
    this.toastr.success('Hello, Success message!', 'Success');
  }

  dangerSnack() {
    this.toastr.error('Hello, Error message', 'Error');
  }

  warningSnack() {
    this.toastr.warning('Hello, Warning message', 'Warning');
  }

  infoSnack() {
    this.toastr.info('Hello, Info message', 'Info');
  }
}
