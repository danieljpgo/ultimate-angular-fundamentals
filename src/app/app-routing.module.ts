import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home-page/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { UserDashboardComponent } from "./dashboard-users/containers/user-dashboard/user-dashboard.component";
import { UserViewerComponent } from "./dashboard-users/containers/user-viewer/user-viewer.component";


export const routes: Routes = [
  // redirectTo: 'passengers'
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'passengers',
    children: [
      { path: '', component: UserDashboardComponent },
      { path: ':id', component: UserViewerComponent}
    ]},
  { path: '**', component: NotFoundComponent, pathMatch: 'full'},
];

@NgModule({
// { useHash: true}
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
