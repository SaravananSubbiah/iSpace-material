import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ispace-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public selectedVal: string;
  constructor() { }

  ngOnInit() {
    this.selectedVal = 'option1';
  }

  public onValChange(val: string) {
    this.selectedVal = val;
    console.log(this.selectedVal);
  }
}
