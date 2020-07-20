import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  name: string;
}
@Component({
  selector: 'ispace-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public contactName: string;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<RegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {
    this.form = fb.group({
      'gendre': ['', Validators.required],
      'uwf': ['', Validators.required],
      'other': ['', Validators.required],
      grade: ['', Validators.required],
      school: ['', Validators.required],
      studentname: ['', Validators.required],
      coursename: ['', Validators.required],
      interested: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.contactName = 'Contact Us';
  }
  submitRegistrationClick(registration) {
    const submitted = {
      uwf: this.form.value.uwf,
      other: this.form.value.other,
      gendre : this.form.value.gendre,
      grade : this.form.value.grade,
      studentname: this.form.value.studentname,
      school: this.form.value.school
    };
    this.openSnackBar('Successfully Submitted', 'submitted');
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
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


