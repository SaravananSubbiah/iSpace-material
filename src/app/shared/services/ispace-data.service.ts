import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { School, Bullet, Lesson } from './../interfaces/school';

@Injectable({
  providedIn: 'root'
})
export class IspaceDataService {

  constructor(private _httpClient: HttpClient) { }

  getApp(): string {
    return "Hello world";
  }

  getLessons(): Observable<any>{
    return this._httpClient.get<any>('./assets/json/ispace-lessons.json')
    .pipe(map(response => response));
  }

getSchools(): Observable<School[]>{
  return this._httpClient.get<School[]>('https://jsonplaceholder.typicode.com/posts')
                          .pipe(map(response => response));
}

getBullets(): Observable<Bullet[]>{
  return this._httpClient.get<Bullet[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(map(response =>
        [
          {
          bulletHead: 'Parking',
          bulletColor: 'accent',
          bulletPoints: [
                          '24 hours Security',
                          '24 hours Reception',
                          '24 hours Wireless Internet',
                          'Elevator',
                          'Mobile alert',
                          'Wallet Parking'
                        ]
        },
        {
          bulletHead: 'Parking',
          bulletColor: 'warn',
          bulletPoints: [
                          '24 hours Security',
                          '24 hours Reception',
                          '24 hours Wireless Internet',
                          'Elevator',
                          'Mobile alert',
                          'Wallet Parking'
                        ]
        },
        {
          bulletHead: 'Parking',
          bulletColor: 'primary',
          bulletPoints: [
                          '24 hours Security',
                          '24 hours Reception',
                          '24 hours Wireless Internet',
                          'Elevator',
                          'Mobile alert',
                          'Wallet Parking'
                        ]
        }
      ]
        ));
}

getLessons1(): Observable<Lesson[]>{
  return this._httpClient.get<Lesson[]>('https://jsonplaceholder.typicode.com/posts')
                          .pipe(map(response => response));
}


getSchoolWithId(params: any): Observable<School[]>{
  var userId = params['userId'];
  var id = params['schoolId'];
  console.log(id);
  return this._httpClient.get<School[]>('https://jsonplaceholder.typicode.com/posts?userId=' + id)
                          .pipe(map(response => response));
}

// deleteSchool(id: number) : Observable<any> {
//   //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Delete error.'));
//   return Observable.of({}).delay(2000)
//    .do(e => this.countries.splice(this.countries.findIndex(c => c.id == id), 1));
// }

getCommentsByPostId(postId: string): Observable<Comment[]>{
  console.log(postId);
  return this._httpClient.get<Comment[]>('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments')
  .pipe(map(response => response));

}
}
