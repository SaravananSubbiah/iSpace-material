import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'ispace-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public contactName: string;
  public form: FormGroup;

  constructor(
    private fb: FormBuilder
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
    console.log('submitting : ', submitted);
  }
}
