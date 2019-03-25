import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ParkingSpot } from '../shared/interfaces/school';

@Component({
  selector: 'ispace-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent implements OnInit {

  @Input() spot: ParkingSpot;
  @Output() voted = new EventEmitter<boolean>();
  @Input() total: number;
  @Input() agreed: number;
  upVote = false;
  downVote = false;

  constructor() {
  }

  ngOnInit() {
    console.log('Spot : ', this.spot.spotOpen);
  }
  vote(agreed: boolean) {

    this.upVote = (this.agreed >= this.total) ? true : false;
    this.downVote = (this.agreed >= 1) ? false : true;

    if (!this.upVote || !this.downVote) {
      this.voted.emit(agreed);
    }
    console.log('agreed', this.agreed, this.total);
  }

  // voteDown(agreed: boolean) {
  //   if (this.agreed >= 1) {
  //     this.voted.emit(agreed);
  //   } else {
  //     this.downVote = true;
  //     this.upVote = false;
  //   }
  //   console.log('agreed', this.agreed, this.total);
  // }
}
