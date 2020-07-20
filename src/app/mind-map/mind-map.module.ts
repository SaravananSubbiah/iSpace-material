import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../material.module';
import { MindMapComponent } from './mind-map.component';
import { D3Service, D3_DIRECTIVES, DraggableDirective } from './d3/index';

import { GraphComponent } from './visuals/graph/graph.component';
import { SHARED_VISUALS, BottomSheetOverviewExampleSheet } from './visuals/shared';


@NgModule({
  declarations: [
    MindMapComponent,
    GraphComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES,
    BottomSheetOverviewExampleSheet
],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MindMapComponent
  ],
  entryComponents: [
    BottomSheetOverviewExampleSheet
],
  providers: [D3Service]
})
export class MindMapModule { }
