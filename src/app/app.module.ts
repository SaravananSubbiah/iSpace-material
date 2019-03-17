import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';
import { EmbedVideo } from 'ngx-embed-video';



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
    EnquiryDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    EmbedVideo.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
