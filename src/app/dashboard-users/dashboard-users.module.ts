import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import {RouterModule} from "@angular/router";

// Containers
import { UserDashboardComponent } from './containers/user-dashboard/user-dashboard.component';
import { UserViewerComponent } from './containers/user-viewer/user-viewer.component';

// Components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

// Services
import { DashboardUsersService } from './dashboard-users.service';

import { routes } from "../app-routing.module";


@NgModule({
  declarations: [
    // Containers
    UserDashboardComponent,
    UserViewerComponent,
    // Components
    PassengerDetailComponent,
    PassengerCountComponent,
    PassengerFormComponent
  ],
  exports: [
    // UserDashboardComponent,
    // UserViewerComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    DashboardUsersService
  ]
})
export class DashboardUsersModule { }
