import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ispace-more-links',
  templateUrl: './more-links.component.html',
  styleUrls: ['./more-links.component.scss']
})
export class MoreLinksComponent implements OnInit {
  panelOpenState = false;
  fillerContent = Array.from({length: 4}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  constructor() { }

  ngOnInit() {
  }

}
