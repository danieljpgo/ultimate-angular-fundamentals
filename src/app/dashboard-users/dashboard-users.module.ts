import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Containers
import { UserDashboardComponent } from './containers/user-dashboard/user-dashboard.component';

// Components
import { PassengerCountComponent} from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent} from "./components/passenger-detail/passenger-detail.component";

@NgModule({
  declarations: [
    UserDashboardComponent,
    PassengerDetailComponent,
    PassengerCountComponent
  ],
  exports: [
    UserDashboardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DashboardUsersModule { }
