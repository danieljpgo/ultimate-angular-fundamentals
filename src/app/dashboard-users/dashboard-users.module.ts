import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserDashboardComponent } from './containers/user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    UserDashboardComponent
  ],
  exports: [
    UserDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DashboardUsersModule { }
