import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

// Containers
import { UserDashboardComponent } from './containers/user-dashboard/user-dashboard.component';

// Components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';

// Services
import { DashboardUsersService } from './dashboard-users.service';
import { UserViewerComponent } from './containers/user-viewer/user-viewer.component';

@NgModule({
  declarations: [
    UserDashboardComponent,
    PassengerDetailComponent,
    PassengerCountComponent,
    UserViewerComponent
  ],
  exports: [
    UserDashboardComponent,
    UserViewerComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    DashboardUsersService
  ]
})
export class DashboardUsersModule { }
