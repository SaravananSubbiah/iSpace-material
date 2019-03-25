import { Component, OnInit, Input, Inject } from '@angular/core';
import { Lesson } from '../shared/interfaces/school';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
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
    this.title = 'test'; //this.lesson.title ? this.lesson.title : '';
    this.lessonId = 'test'; //this.lesson.lessonId ? this.lesson.lessonId : '';
    this.url = 'test'; //this.lesson.url ? this.lesson.url : '';
  }

  ngOnInit() {
    console.log('lession', this.lesson);
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
})
export class DialogOverviewExampleDialog {
  @Input() lesson: Lesson;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
