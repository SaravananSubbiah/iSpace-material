import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule} from '@angular/forms';


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
    private dialog: MatDialog, private router: Router
    ) {
    this.form = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      studentname: ['', Validators.required]
    });
  }

    login() {
    if (this.email === 'email@email.com' && this.password === 'p@ssw0rd') {
      this.router.navigate(['success']);
    } else {
      // this.dialog.open(MessageComponent,{ data: {
      // message:  'Error!!!'
      // }});
    }
  }
}
