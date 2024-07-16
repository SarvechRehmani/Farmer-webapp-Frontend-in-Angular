import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { TablesComponent } from './components/tables/tables.component';
import { WelcomeComponent } from './pages/dashboard/welcome/welcome.component';
import { LoginGuard } from '../gaurd/login.guard';
import { AlertsComponent } from './components/alerts/alerts.component';
import { InputComponent } from './components/input/input.component';
import { ModalComponent } from './components/modal/modal.component';
import { RolesPageComponent } from './pages/dashboard/Management/roles-page/roles-page.component';
import { PermisionsComponent } from './pages/dashboard/Management/permisions/permisions.component';
import { BannersComponent } from './pages/dashboard/CMS/banners/banners.component';
import { AddBannerComponent } from './pages/dashboard/CMS/add-banner/add-banner.component';
import { JourneyComponent } from './pages/dashboard/CMS/journey/journey.component';
import { AddJourneyComponent } from './pages/dashboard/CMS/add-journey/add-journey.component';
import { LanguagesComponent } from './pages/dashboard/languages/languages.component';
import { WarehouseComponent } from './pages/dashboard/warehouse/warehouse.component';
import { AddWarehouseComponent } from './pages/dashboard/warehouse/add-warehouse/add-warehouse.component';
import { DistrictComponent } from './pages/dashboard/district/district.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full',
      },
      {
        path: 'welcome',
        component: WelcomeComponent,
      },
      {
        path: 'roles',
        component: RolesPageComponent,
      },
      {
        path: 'permissions/:roleId',
        component: PermisionsComponent,
      },
      {
        path: 'banners',
        component: BannersComponent,
      },
      {
        path: 'banner/add',
        component: AddBannerComponent,
      },
      {
        path: 'banner/edit/:bId',
        component: AddBannerComponent,
      },
      {
        path: 'journey',
        component: JourneyComponent,
      },
      {
        path: 'journey/add',
        component: AddJourneyComponent,
      },
      {
        path: 'journey/edit/:jId',
        component: AddJourneyComponent,
      },
      {
        path: 'languages',
        component: LanguagesComponent,
      },
      {
        path: 'warehouse',
        component: WarehouseComponent,
      },
      {
        path: 'warehouse/add',
        component: AddWarehouseComponent,
      },
      {
        path: 'warehouse/edit/:id',
        component: AddWarehouseComponent,
      },
      {
        path: 'district',
        component: DistrictComponent,
      },
      {
        path: 'tables',
        component: TablesComponent,
      },
      {
        path: 'alerts',
        component: AlertsComponent,
      },
      {
        path: 'inputs',
        component: InputComponent,
      },
      {
        path: 'modal',
        component: ModalComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
