import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBar} from '@angular/material';

/**
 * @title Stepper with editable steps
 */
@Component({
  selector: 'ispace-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.scss']
})
export class Register2Component implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;

  constructor(
    private _formBuilder: FormBuilder,
    private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  submitRegistrationClick() {
    // const submitted = {
    //   uwf: this.form.value.uwf,
    //   other: this.form.value.other,
    //   gendre : this.form.value.gendre,
    //   grade : this.form.value.grade,
    //   studentname: this.form.value.studentname,
    //   school: this.form.value.school
    // };
    this.openSnackBar('Successfully Submitted', 'submitted');
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
