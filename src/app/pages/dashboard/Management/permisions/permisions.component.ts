import { Component } from '@angular/core';

@Component({
  selector: 'app-permisions',
  templateUrl: './permisions.component.html',
  styleUrl: './permisions.component.css',
})
export class PermisionsComponent {
  permissions: any = [
    {
      permissionId: 1,
      permissionName: 'management',
      subPermissions: [
        {
          subPermissionName: 'role managment',
          hasPermission: false,
        },
        {
          subPermissionName: 'user managment',
          hasPermission: false,
        },
        {
          subPermissionName: 'app managment',
          hasPermission: true,
        },
        {
          subPermissionName: 'content managment',
          hasPermission: true,
        },
      ],
    },
    {
      permissionId: 2,
      permissionName: 'permissions 2',
      subPermissions: [
        {
          subPermissionName: 'Sub permissions 1',
          hasPermission: false,
        },
        {
          subPermissionName: 'Sub permissions 2',
          hasPermission: true,
        },
        {
          subPermissionName: 'Sub permissions 3',
          hasPermission: false,
        },
        {
          subPermissionName: 'Sub permissions 5',
          hasPermission: true,
        },
      ],
    },
  ];
}
