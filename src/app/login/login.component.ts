import { Component, OnInit, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule} from '@angular/forms';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { UserService } from '../shared/services/user.service';

export interface DialogData {
  name: string;
}
@Component({
  selector: 'ispace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public email = '';
  public password = '';
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: UserService,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {
    this.form = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      studentname: ['', Validators.required]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
    signIn() {
    if (this.form.value.studentname === 'Saravanan') {
      this.authService.authenticateUser(true);
      this.dialogRef.close();
      //this.router.navigate(['success']);
    } else {
      // this.dialog.open(MessageComponent,{ data: {
      // message:  'Error!!!'
      // }});
    }
  }
}
