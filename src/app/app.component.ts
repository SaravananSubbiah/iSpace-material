import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, HostListener} from '@angular/core';
/** @title Responsive sidenav */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnDestroy {
  title = 'iSpace-material';
  showScroll: boolean;
  showScrollHeight = 300;
  hideScrollHeight = 10;

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 4}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({length: 4}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    console.log(this.mobileQuery);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  @HostListener('window:scroll', [])
  onWindowScroll()
  {
    if (( window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight)
    {
        this.showScroll = true;
    }
    else if ( this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight)
    {
      this.showScroll = false;
    }
  }


  scrollToTop()
  {
    (function smoothscroll()
    { var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0)
      {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
      }
    })();
  }
}
