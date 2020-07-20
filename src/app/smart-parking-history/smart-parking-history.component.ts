import { Component, OnInit, Inject } from '@angular/core';
import { IspaceDataService } from './../shared/services/ispace-data.service';
import { Lesson } from './../shared/interfaces/school';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EnquiryDialogComponent } from '../enquiry-dialog/enquiry-dialog.component';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
// {"spotOpen":true,"spotId":"9999999","timestamp":1552849890},
export interface ParkingSpot {
  spotOpen: boolean;
  spotId: string;
  timestamp: number;
}

const ELEMENT_DATA: ParkingSpot[] = [
{spotOpen: true,spotId: "9999999",timestamp: 1552849890},
{spotOpen: true,spotId: "9999999",timestamp: 1552849890},
{spotOpen: false,spotId: "9999999",timestamp: 1552849895},
{spotOpen: true,spotId: "9999999",timestamp: 1552849896},
{spotOpen: false,spotId: "650404158",timestamp: 1552849897},
{spotOpen: true,spotId: "650404158",timestamp: 1552849899},
{spotOpen: false,spotId: "650404158",timestamp: 1552849908},
{spotOpen: true,spotId: "650404158",timestamp: 1552849909},
{spotOpen: false,spotId: "9999999",timestamp: 1552849910},
{spotOpen: true,spotId: "9999999",timestamp: 1552849911},
{spotOpen: false,spotId: "9999999",timestamp: 1552849913},
{spotOpen: true,spotId: "9999999",timestamp: 1552849914},
{spotOpen: false,spotId: "650404158",timestamp: 1552849915},
{spotOpen: true,spotId: "650404158",timestamp: 1552849917}
];
export interface DialogData {
  name: string;
}
@Component({
  selector: 'ispace-smart-parking-history',
  templateUrl: './smart-parking-history.component.html',
  styleUrls: ['./smart-parking-history.component.scss']
})
export class SmartParkingHistoryComponent implements OnInit {
  displayedColumns: string[] = ['spotOpen', 'spotId', 'timestamp'];
  dataSource = new ExampleDataSource();
  public parking: any;
  public parkingSpots: [];
  constructor(
    private ispaceDataService: IspaceDataService,
    public dialogRef: MatDialogRef<SmartParkingHistoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {

    }
  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
    login() {
    if (true) {
      //this.router.navigate(['success']);
    } else {
      // this.dialog.open(MessageComponent,{ data: {
      // message:  'Error!!!'
      // }});
    }
  }

}


/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<ParkingSpot> {
  /** Stream of data that is provided to the table. */

  data = new BehaviorSubject<ParkingSpot[]>(ELEMENT_DATA);

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<ParkingSpot[]> {
    console.log('spot data', this.data);
    return this.data;
  }

  disconnect() {}
}
