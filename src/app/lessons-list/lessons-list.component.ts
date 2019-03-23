import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { IspaceDataService } from './../shared/services/ispace-data.service';
import { Lesson } from './../shared/interfaces/school';
import { EnquiryDialogComponent } from '../enquiry-dialog/enquiry-dialog.component';
import { LessonComponent } from '../lesson/lesson.component';


@Component({
  selector: 'ispace-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})
export class LessonsListComponent implements OnInit {
  lessonsArray: Lesson[];
  lessons123: any[];
  constructor(
    private _ispaceDataService: IspaceDataService ) { }

  ngOnInit() {
    this._ispaceDataService
    .getLessons()
    .subscribe(data => {
      console.log(data.lessions.length);
      this.lessonsArray = data.lessions;
    });
    this.lessons123 = [
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
