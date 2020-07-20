import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  CanDeactivate,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { UserService } from './shared/services/user.service';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  successfulLogin = false;
  constructor(
    private authService: UserService,
    private dialog: MatDialog,
    // private router: Router
    ) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('i am checking to see if you are logged in');
    // Use the spread operator to keep the previously resolved data
    next.data = { ...next.data, guardedData123: 'guarded123' };
    console.log(next.data);
    // return true;
    this.authService.cast.subscribe(loggedIn => this.successfulLogin = loggedIn);
    if (this.successfulLogin) {
        return true;
    } else {
    // Open the Dialog
    const dialogRef = this.dialog.open(LoginComponent, {
      height: '50hw',
      width: '60vw',
      data: {success: this.successfulLogin}
    });

    return dialogRef.afterClosed().toPromise().then(result =>{
      console.log('login succesully');
      return result ? true : false;
  });
}
    // return this.restrictByEmail();
  }

  restrictByEmail() {
    console.log('CanActivate passed');
    return false;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('checking child route access');
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}

@Injectable()
export class CanDeactivateGuard
  implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
