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
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { SelectivePreloadingStrategyService } from './shared/services/selective-preloading-strategy.service';
import { MindMapComponent } from './mind-map/mind-map.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  {
    path: 'mindmap',
    component: MindMapComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: HomeComponent,
    canActivateChild: [AuthGuard],
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

        ] },
  {
    path: 'smartparking',
    component: SmartParkingComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'about',
    component: AboutComponent  },
  {
    path: 'lessons',
    component: LessonsListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'register2',
    component: Register2Component
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
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
