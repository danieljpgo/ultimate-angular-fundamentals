import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DashboardUsersModule} from "./dashboard-users/dashboard-users.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    AppRoutingModule,
    DashboardUsersModule,
    // Custom Modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
