import { Component, OnInit } from '@angular/core';
import { IspaceDataService } from './../shared/services/ispace-data.service';
import { MessMenu } from './../shared/interfaces/school';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EnquiryDialogComponent } from '../enquiry-dialog/enquiry-dialog.component';
import {MatSnackBar} from '@angular/material';


export interface DialogData {
  phone: string;
  name: string;
  enquiry: string;
}


@Component({
  selector: 'ispace-smart-parking',
  templateUrl: './smart-parking.component.html',
  styleUrls: ['./smart-parking.component.scss']
})
export class SmartParkingComponent implements OnInit {
  total = 15;
  agreed = 0;
  disagreed = 0;
  voters = ['Park-1', 'Park-2', 'Park-3', 'Park-4', 'Park-5', 'Park-6', 'Park-7', 'Park-8', 'Park-9', 'Park-10', 'Park-11', 'Park-12'];

  messmenus: MessMenu[];
  constructor(
    private _appService: IspaceDataService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) { }
  onVoted(agreed: boolean) {
    this.openSnackBar(agreed ? 'Successfully added' : 'Successfully removed', 'Parking')
    if (agreed) {
      this.agreed++;
      this.disagreed--;
    } else {
      this.disagreed++;
      this.agreed--;
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(EnquiryDialogComponent, {
      width: '400px',
      height: '400px',
      data: {name: 'this.name'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result.name);
      console.log(result === undefined ? 'und' : result);
      // this.name = result.name;
      // this.phone = result.phone;
    });
  }
  ngOnInit() {
    // this._appService.getMessMenu().subscribe(data=>this.messmenus = data);
    this.messmenus = [
      {id: 'M01',
        dayofweek: 'Sunday',
        menu: {
          breakfast: 'Idly or Pongal + vadai',
          lunch: 'Unlimited South Indian Thali, Rice or Chappati',
          dinner: 'Dosai, Sambar'
        }
        },
        {id: 'M01',
        dayofweek: 'Monday',
        menu: {
          breakfast: 'Idly or Pongal + vadai',
          lunch: 'Unlimited South Indian Thali, Rice or Chappati',
          dinner: 'Dosai, Sambar'
        }
        },
        {id: 'M01',
        dayofweek: 'Tuesday',
        menu: {
          breakfast: 'Idly or Pongal + vadai',
          lunch: 'Unlimited South Indian Thali, Rice or Chappati',
          dinner: 'Dosai, Sambar'
        }
        },
        {id: 'M01',
        dayofweek: 'Wednesday',
        menu: {
          breakfast: 'Idly or Pongal + vadai',
          lunch: 'Unlimited South Indian Thali, Rice or Chappati',
          dinner: 'Dosai, Sambar'
        }
        },
        {id: 'M01',
        dayofweek: 'Thursday',
        menu: {
          breakfast: 'Idly or Pongal + vadai',
          lunch: 'Unlimited South Indian Thali, Rice or Chappati',
          dinner: 'Dosai, Sambar'
        }
        },
        {id: 'M01',
        dayofweek: 'Friday',
        menu: {
          breakfast: 'Idly or Pongal + vadai',
          lunch: 'Unlimited South Indian Thali, Rice or Chappati',
          dinner: 'Dosai, Sambar'
        }
        },
        {id: 'M01',
        dayofweek: 'Saturday',
        menu: {
          breakfast: 'Idly or Pongal + vadai',
          lunch: 'Unlimited South Indian Thali, Rice or Chappati',
          dinner: 'Dosai, Sambar'
        }
        }
    ]
  }
}
