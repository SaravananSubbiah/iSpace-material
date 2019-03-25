import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { EmbedVideo } from 'ngx-embed-video';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MindMapComponent } from './mind-map/mind-map.component';
import { VideoComponent } from './video/video.component';
import { SmartParkingComponent } from './smart-parking/smart-parking.component';
import { CardComponent } from './card/card.component';
import { VoterComponent } from './voter/voter.component';
import { EnquiryDialogComponent } from './enquiry-dialog/enquiry-dialog.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonComponent, DialogOverviewExampleDialog } from './lesson/lesson.component';
import { MoreLinksComponent } from './more-links/more-links.component';
import { RegisterComponent } from './register/register.component';
import { Register2Component } from './register2/register2.component';
import { LoginComponent } from './login/login.component';
import { VideoDialogComponent } from './video-dialog/video-dialog.component';
import { AboutComponent } from './about/about.component';


import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    MindMapComponent,
    VideoComponent,
    SmartParkingComponent,
    CardComponent,
    VoterComponent,
    EnquiryDialogComponent,
    LessonsListComponent,
    LessonComponent,
    DialogOverviewExampleDialog,
    MoreLinksComponent,
    RegisterComponent,
    Register2Component,
    LoginComponent,
    AboutComponent,
    VideoDialogComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    DialogOverviewExampleDialog,
    EnquiryDialogComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    EmbedVideo.forRoot(),
    ReactiveFormsModule
  ],
  providers: [ FormBuilder ],
  bootstrap: [AppComponent
  ]
})
export class AppModule { }
