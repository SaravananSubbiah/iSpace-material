import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
