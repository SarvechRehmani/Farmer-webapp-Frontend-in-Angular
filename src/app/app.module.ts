import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBadgeModule } from '@angular/material/badge';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { MatCheckboxModule } from '@angular/material/checkbox'; // Import FormsModule
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { DataTablesModule } from 'angular-datatables';
import { GoogleMapsModule } from '@angular/google-maps';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TablesComponent } from './components/tables/tables.component';
import { WelcomeComponent } from './pages/dashboard/welcome/welcome.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { InputComponent } from './components/input/input.component';
import { ModalComponent } from './components/modal/modal.component';
import { MytableComponent } from './components/mytable/mytable.component';
import { RolesPageComponent } from './pages/dashboard/Management/roles-page/roles-page.component';
import { CarouselModule } from './components/carousel/carousel.module';
import { PermisionsComponent } from './pages/dashboard/Management/permisions/permisions.component';
import { BannersComponent } from './pages/dashboard/CMS/banners/banners.component';
import { AddBannerComponent } from './pages/dashboard/CMS/add-banner/add-banner.component';
import { JourneyComponent } from './pages/dashboard/CMS/journey/journey.component';
import { AddJourneyComponent } from './pages/dashboard/CMS/add-journey/add-journey.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BodyComponent } from './components/body/body.component';
import { SublevelMenuComponent } from './components/sidenav/sublevel-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { LanguagesComponent } from './pages/dashboard/languages/languages.component';
import { WarehouseComponent } from './pages/dashboard/warehouse/warehouse.component';
import { AddWarehouseComponent } from './pages/dashboard/warehouse/add-warehouse/add-warehouse.component';
import { DistrictComponent } from './pages/dashboard/district/district.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NavbarComponent,
    TablesComponent,
    WelcomeComponent,
    AlertsComponent,
    InputComponent,
    ModalComponent,
    MytableComponent,
    RolesPageComponent,
    PermisionsComponent,
    BannersComponent,
    AddBannerComponent,
    JourneyComponent,
    AddJourneyComponent,
    SidenavComponent,
    BodyComponent,
    SublevelMenuComponent,
    LanguagesComponent,
    WarehouseComponent,
    AddWarehouseComponent,
    DistrictComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    NgbModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatBadgeModule,
    FormsModule,
    MatCheckboxModule,
    CarouselModule,
    MatPaginatorModule,
    HttpClientModule,
    MatTabsModule,
    DataTablesModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    BrowserAnimationsModule, // Add BrowserAnimationsModule here
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
