import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SmartParkingComponent } from './smart-parking/smart-parking.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { Register2Component } from './register2/register2.component';

import { LoginComponent } from './login/login.component';

import { MindMapComponent } from './mind-map/mind-map.component';
import { SelectivePreloadingStrategyService } from './shared/services/selective-preloading-strategy.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'mindmap',
    component: MindMapComponent
  },
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'smartparking',
    component: SmartParkingComponent
  },
  {
    path: 'lessons',
    component: LessonsListComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'register2',
    component: Register2Component
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
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    useHash: true,
    preloadingStrategy: SelectivePreloadingStrategyService
})],
providers: [SelectivePreloadingStrategyService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
