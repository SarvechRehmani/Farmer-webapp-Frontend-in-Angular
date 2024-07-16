import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Role } from '../../../../models/Role';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrl: './warehouse.component.css',
})
export class WarehouseComponent implements OnInit {
  constructor(private toastr: ToastrService) {
    // this.countUsersByRole();
  }

  ngOnInit(): void {}
  head: any[] = [
    { Head: 'Warehouse', Field: 'warehouse' },
    { Head: 'Location Longitude', Field: 'location_long' },
    { Head: 'Location Latitude', Field: 'location_lati' },
    { Head: 'STATUS', Field: 'status' },
  ];

  warehouse: any[] = [
    {
      id: 1,
      warehouse: 'Manager',
      location_long: '30.3753',
      location_lati: '669.3451',
      status: true,
    },
    {
      id: 2,
      warehouse: 'Admin',
      location_long: '24.8607',
      location_lati: '67.0011',
      status: false,
    },
    {
      id: 3,
      warehouse: 'User',
      location_long: '24.8607',
      location_lati: '67.0011',
      status: true,
    },
    {
      id: 4,
      warehouse: 'Manager',
      location_long: '24.8607',
      location_lati: '67.0011',
      status: false,
    },
    {
      id: 5,
      warehouse: 'Administrator',
      location_long: '24.8607',
      location_lati: '67.0011',
      status: false,
    },
    {
      id: 6,
      warehouse: 'Administrator',
      location_long: '24.8607',
      location_lati: '67.0011',
      status: true,
    },
    {
      id: 7,
      warehouse: 'Administrator',
      location_long: '24.8607',
      location_lati: '67.0011',
      status: true,
    },
    {
      id: 8,
      warehouse: 'Administrator',
      location_long: '24.8607',
      location_lati: '67.0011',
      status: false,
    },
    {
      id: 9,
      warehouse: 'Administrator',
      location_long: '24.8607',
      location_lati: '67.0011',
      status: true,
    },
    {
      id: 10,
      warehouse: 'Manager',
      location_long: '24.8607',
      location_lati: '67.0011',
      status: false,
    },
    {
      id: 11,
      warehouse: 'Administrator',
      location_long: '24.8607',
      location_lati: '67.0011',
      status: false,
    },
    {
      id: 12,
      warehouse: 'Manager',
      location_long: '24.8607',
      location_lati: '67.0011',
      status: false,
    },
    {
      id: 13,
      warehouse: 'Administrator',
      location_long: '24.8607',
      location_lati: '67.0011',
      status: false,
    },
    {
      id: 14,
      warehouse: 'Administrator',
      location_long: '24.8607',
      location_lati: '67.0011',
      status: true,
    },
  ];

  // ADD ROLE
  newWarehouse: any = {
    warehouse: '',
    location_long: '',
    location_lati: '',
    isActive: false,
  };

  addWarehouseSubmit() {
    console.log(this.newWarehouse);
    this.toastr.success('Successfully', 'Role is Succesfully added...');
  }

  wareHousemit: any;
  getWarehouse(w: any) {
    this.warehouse = w;
    console.log(w);
  }

  private modalService = inject(NgbModal);

  vwarehouse: any = {};
  viewWarehouseOpen(content: TemplateRef<any>, wh: any) {
    this.vwarehouse = wh;
    console.log(this.vwarehouse);
    this.modalService.open(content).result.then(
      (result) => {},
      (reason) => {
        console.log('dismissed modal', reason);
      }
    );
  }

  deleteWarehouse(warehouse: any) {
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
        this.warehouse = this.warehouse.filter((w) => w.id !== warehouse.id);
        Swal.fire({
          title: 'Deleted!',
          text: 'Warehouse has been deleted.',
          icon: 'success',
        });
      }
    });
  }

  // GOOGLE MAP API-----------------------------------
  display: any;
  center: google.maps.LatLngLiteral = {
    lat: this.vwarehouse.location_long,
    lng: this.vwarehouse.location_lati,
  };
  zoom = 5;
  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }

  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
  };
  markerPositions: google.maps.LatLngLiteral[] = [];
  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
  }
}
