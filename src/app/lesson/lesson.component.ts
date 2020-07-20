import { Component, OnInit, Input, Inject } from '@angular/core';
import { Lesson } from '../shared/interfaces/school';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  lesson: Lesson;
  name: string;
}

@Component({
  selector: 'ispace-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  @Input() lesson: Lesson;
  title: string;
  lessonId: string;
  url: string;

  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {
    console.log('lession', this.lesson);
    this.title = this.lesson.title ? this.lesson.title : '';
    this.lessonId = this.lesson.lessonId ? this.lesson.lessonId : '';
    this.url = this.lesson.url ? this.lesson.url : '';
  }
  openDialog(lesson: Lesson): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      height: '50hw',
      width: '60vw',
      data: {name: this.lessonId, title: this.title, url: this.url}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.title = result;
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
  styles: [`
  ::ng-deep .mat-dialog-container {
    padding: 0px !important;
    background: #fefefe;
  },
  ::ng-deep .mat-dialog-content {
    width:100%;
    background: red;
  }
  `]

})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
