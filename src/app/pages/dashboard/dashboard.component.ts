import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import { User } from '../../../models/User';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(private _login: LoginService, private router: Router) {}

  sidebarItems: {
    label: string;
    icon: string;
    links: string;
    children?: any[];
    expanded?: boolean;
  }[] = [];

  toggleSubMenu(item: any) {
    if (item.children && item.children.length > 0) {
      item.expanded = !item.expanded;
    } else {
      this.router.navigate([item.links]);
    }

    console.log(item.label + ' expanded: ' + item.expanded);
  }
  getUser() {
    return this._login.getUser();
  }

  logout() {
    this._login.logoutUser();
  }

  ngOnInit() {
    let screenWidth = window.innerWidth;

    function handleResize() {
      screenWidth = window.innerWidth;
      if (screenWidth < 600) {
      }
      console.log('Screen width:', screenWidth);
    }

    // Initial call to set the initial screen width
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    let user: User = this.getUser();
    if (user == null) {
      this.router.navigate(['/login']);
    } else {
      // Check user role and set sidebar items accordingly
      let user: User = this.getUser();
      if (user == null) {
        this.router.navigate(['/login']);
      } else {
      }
    }

    // SIDEBAR TOGGEL
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('#btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        if (sidebar) {
          sidebar.classList.toggle('open');
        }
        menuBtnChange(); //calling the function(optional)
      });
    }
    // following are the code to change sidebar button(optional)
    function menuBtnChange() {
      if (sidebar) {
        if (sidebar.classList.contains('open')) {
          if (closeBtn) {
            closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right'); //replacing the iocns class
          }
        } else {
          if (closeBtn) {
            closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu'); //replacing the iocns class
          }
        }
      }
    }
  }

  // -----------------------------
  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle) {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
