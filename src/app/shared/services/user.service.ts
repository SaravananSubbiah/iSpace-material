import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of as observableOf } from 'rxjs';
import { UserApi } from './UserApi';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) { }
  cast = this.isAuthenticated.asObservable();

  authenticateUser(val){
    this.isAuthenticated.next(val);
  }
  signIn(username: string, password: string, rememberMe: boolean): Observable<any> {
    console.log('UserService.signIn: ' + username + ' ' + password + ' ' + rememberMe);
    return observableOf(true);
    // return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Invalid User Name and/or Password'));
  }

  signOut(): Observable<any> {
    return observableOf(false);
  }

}
