import { Component, Input } from '@angular/core';
import { Node } from '../../../d3';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';

@Component({
  selector: '[nodeVisual]',
  template: `
  <svg:g [attr.transform]="'translate(' + 50 + ',' + 100 + ')'" id="player" class="player" [class.voted]="flipped">
  <g id="wakeup" role="listitem">
  <a xlink:href="#wakeup-group" role="img" aria-labelledby="wakeup-time wakeup-text wakeup-description" tabindex="0" id="wakeup-group">
    <rect class="st20 time-circle" x="713.6" y="616.5" width="200" height="200"/>
    <g class="wakeup-title">
      <text id="wakeup-text" transform="matrix(1 0 0 1 629.1059 546.348)" class="st2 st16">SMART PARKING!</text>
    </g>
    <g id="wakeup-activity">
      <rect x="614.5" y="670.3" class="st17" width="204.2" height="68"/>
      <text id="wakeup-description" transform="matrix(1 0 0 1 619.1191 683.2352)">
        <tspan x="0" y="0" class="back">{{node.x}} </tspan>
        <tspan x="24" y="21.6" class="st22 st14 st19">ENOUGH SLEEP. </tspan>
        <tspan class="offscreen">{{node.desc}}x={{node.x}}y={{node.y}}</tspan>
      </text>
      <image style="overflow:visible;" width="256" height="256" id="wakeup-image" xlink:href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/44216/cat_sing.png" transform="matrix(0.375 0 0 0.375 664.1059 557)">
      </image>
    </g>
  </a>
</g>
</svg:g>

  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/44216/pixels-2.svg" alt="Pixels, my super cute cat">
  <svg:g [attr.transform]="'translate(' + node.x + ',' + node.y + ')'">
      <svg:circle
      (click)="openBottomSheet()"
          class="node"
          [attr.fill]="node.bgcolor"
          cx="0"
          cy="0"
          [attr.r]="node.r + 5">
      </svg:circle>
      <svg:text
          class="node-name"
          [attr.font-size]="node.fontSize">
        {{node.id}}.{{node.title}}
      </svg:text>
      </svg:g>
      <svg:g [attr.transform]="'translate(' + 200 + ',' + 200 + ')'">
      <svg:circle
          (click)="openBottomSheet()"
          class="node"
          [attr.fill]="node.bgcolor"
          cx="0"
          cy="0"
          [attr.r]="node.r">
      </svg:circle>
      <svg:text
          class="node-name"
          [attr.font-size]="node.fontSize">
        {{node.desc}}
      </svg:text>
      </svg:g>
  `,
  styleUrls: ['./node-visual.component.css']
})
export class NodeVisualComponent {
  @Input('nodeVisual') node: Node;
  public showDiv = false;
  public showDivStyle = 'visibility: hidden';
  testText = 'Test text on hover';
  flipped = true;
  imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkL8GlKZ775j3f0VVgS1rU8L2LoX5UEM6fKv_eGLzeza27WYH"


  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
  flipIt() {
    this.flipped = !this.flipped;
  }
}


@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template: `
  <mat-nav-list>
  <a href="https://keep.google.com/" mat-list-item (click)="openLink($event)">
    <span mat-line>Google Keep</span>
    <span mat-line>Add to a note</span>
  </a>

  <a href="https://docs.google.com/" mat-list-item (click)="openLink($event)">
    <span mat-line>Google Docs</span>
    <span mat-line>Embed in a document</span>
  </a>

  <a href="https://plus.google.com/" mat-list-item (click)="openLink($event)">
    <span mat-line>Google Plus</span>
    <span mat-line>Share with your friends</span>
  </a>

  <a href="https://hangouts.google.com/" mat-list-item (click)="openLink($event)">
    <span mat-line>Google Hangouts</span>
    <span mat-line>Show to your coworkers</span>
  </a>
</mat-nav-list>
<button mat-icon-button [matMenuTriggerFor]="menu">
<mat-icon>more_vert</mat-icon>
</button>
<mat-menu #menu="matMenu">
<div>Any Div content
</div>
<button mat-menu-item>
  <mat-icon>dialpad</mat-icon>
  <span>Redial</span>
</button>
<button mat-menu-item disabled>
  <mat-icon>voicemail</mat-icon>
  <span>Check voicemail</span>
</button>
<button mat-menu-item>
  <mat-icon>notifications_off</mat-icon>
  <span>Disable alerts</span>
</button>
</mat-menu>
  `,
})
export class BottomSheetOverviewExampleSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
