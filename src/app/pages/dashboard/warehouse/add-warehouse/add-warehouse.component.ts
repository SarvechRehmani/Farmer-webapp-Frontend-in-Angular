import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-warehouse',
  templateUrl: './add-warehouse.component.html',
  styleUrl: './add-warehouse.component.css',
})
export class AddWarehouseComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}
  id: any = this.router.snapshot.params['id'];

  warehouse: any = {
    name: '',
    long: '',
    lati: '',
    status: true,
  };
  addWarehouseForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    long: new FormControl('', [Validators.required]),
    lati: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
  });
  submit() {
    // console.log(this.addWarehouseForm.value);
  }

  ngOnInit(): void {
    console.log(this.id);
    if (this.id) {
      this.warehouse.order = 1;
      this.warehouse.bannerId = this.id;
      this.warehouse.banner = 'abc.jgp';
      this.warehouse.language = 'en';
    }
    console.log(this.warehouse);
  }

  // GOOGLE MAP API
  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 30.3753,
    lng: 69.3451,
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

  get name() {
    return this.addWarehouseForm.get('name');
  }

  get long() {
    return this.addWarehouseForm.get('long');
  }

  get lati() {
    return this.addWarehouseForm.get('lati');
  }

  get status() {
    return this.addWarehouseForm.get('status');
  }
}
