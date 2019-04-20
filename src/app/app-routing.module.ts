import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

import { UserDashboardComponent } from "./dashboard-users/containers/user-dashboard/user-dashboard.component";
import { UserViewerComponent } from "./dashboard-users/containers/user-viewer/user-viewer.component";


export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'passengers',
    children: [
      { path: '', component: UserDashboardComponent },
      { path: ':id', component: UserViewerComponent}
    ]},
  { path: '**', component: NotFoundComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
