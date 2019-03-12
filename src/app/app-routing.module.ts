import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { MindMapComponent } from './mind-map/mind-map.component';

const routes: Routes = [
  {
    path: 'mindmap',
    component: MindMapComponent
  },
  
//   { path: 'signin', component: SigninComponent },
//   { path: 'register', component: RegisterUserComponent },
//   { path: 'authenticated', component: AuthenticatedUserComponent,
//    canActivate: [AuthGuard]
// },
//   //   children: [
//   //     { path: '', canActivateChild: [AuthGuard],
//   //       children: [
//   //         { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          
//   //       ] }
//   //     ] },
//   {
//     path: 'dashboard',
//     component: DashboardComponent
//   },
//   {
//     path: 'school-list',
//     component: SchoolListComponent
//   },
//   {
//     path: 'school-maintenance',
//     component: SchoolMaintenanceComponent
//   },
//   {
//     path: 'mess-facilities',
//     component: MenuComponent
//   },
//   {
//     path: 'about-us',
//     component: AboutUsComponent
//   },
//   {
//     path: 'enquiry',
//     component: EnquiryComponent
//   },  
//   //{path: 'post-detail/:userId', component : PostDetailComponent }
//   {
//     path: 'school-detail/:schoolId',
//     component: SchoolDetailComponent,
//     canActivate: [AuthGuard],
//   },
//   {
//     path: 'school-detail',
//     component: SchoolDetailComponent,
//     canActivate: [AuthGuard],
//   },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
