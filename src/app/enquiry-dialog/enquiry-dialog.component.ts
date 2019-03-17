import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl} from '@angular/forms';


export interface DialogData {
  phone: string;
  name: string;
  enquiry: string;
}
@Component({
  selector: 'ispace-enquiry-dialog',
  templateUrl: './enquiry-dialog.component.html',
  styleUrls: ['./enquiry-dialog.component.css']
})
export class EnquiryDialogComponent {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  constructor(
    public dialogRef: MatDialogRef<EnquiryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
