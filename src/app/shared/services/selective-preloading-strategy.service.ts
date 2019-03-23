import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectivePreloadingStrategyService {
  preloadedModules: string[] = [];
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      // add the route path to the preloaded module array
      this.preloadedModules.push(route.path);
      // log the path to the console
      console.log('Preloaded :', route.path);
      return load();
    } else {
      return of(null);
    }
  }
  constructor() { }
}
