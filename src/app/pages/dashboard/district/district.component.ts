import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrl: './district.component.css',
})
export class DistrictComponent implements OnInit {
  forRevert: any;
  ngOnInit(): void {
    this.forRevert = JSON.parse(JSON.stringify(this.districts));
    console.log(this.districts);
  }
  districts: any = [
    {
      districkId: 1,
      districtName: 'District 1',
      isActive: true,
      tehsil: [
        {
          tehsilId: 1,
          telsilName: 'Tehsil 1',
          isActive: true,
          cities: [
            {
              cittId: 1,
              cityName: 'City 1',
              isActive: true,
            },
            {
              cittId: 2,
              cityName: 'City 2',
              isActive: true,
            },
            {
              cittId: 3,
              cityName: 'City 3',
              isActive: true,
            },
          ],
        },
        {
          tehsilId: 4,
          telsilName: 'Tehsil 2',
          isActive: false,
          cities: [
            {
              cittId: 5,
              cityName: 'City 4',
              isActive: true,
            },
            {
              cittId: 6,
              cityName: 'City 5',
              isActive: true,
            },
            {
              cittId: 7,
              cityName: 'City 6',
              isActive: true,
            },
          ],
        },
      ],
    },
    {
      districkId: 2,
      districtName: 'District 2',
      isActive: true,
      tehsil: [
        {
          tehsilId: 1,
          telsilName: 'Tehsil 3',
          isActive: true,
          cities: [
            {
              cittId: 1,
              cityName: 'City 1',
              isActive: true,
            },
            {
              cittId: 2,
              cityName: 'City 2',
              isActive: true,
            },
            {
              cittId: 3,
              cityName: 'City 3',
              isActive: true,
            },
          ],
        },
        {
          tehsilId: 2,
          telsilName: 'Tehsil 4',
          isActive: false,
          cities: [
            {
              cittId: 1,
              cityName: 'City 1',
              isActive: true,
            },
            {
              cittId: 2,
              cityName: 'City 2',
              isActive: true,
            },
            {
              cittId: 3,
              cityName: 'City 3',
              isActive: true,
            },
            {
              cittId: 4,
              cityName: 'City 4',
              isActive: true,
            },
          ],
        },
      ],
    },
    {
      districkId: 3,
      districtName: 'District 3',
      isActive: false,
    },
  ];

  submit() {
    console.log(this.districts);
  }
  resert() {
    this.districts = JSON.parse(JSON.stringify(this.forRevert));
    console.log(this.districts);
  }
}
