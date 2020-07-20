export * from './node-visual/node-visual.component';
export * from './link-visual/link-visual.component';

import { NodeVisualComponent, BottomSheetOverviewExampleSheet } from './node-visual/node-visual.component';
import { LinkVisualComponent } from './link-visual/link-visual.component';

export const SHARED_VISUALS = [
    NodeVisualComponent,
    LinkVisualComponent,
      BottomSheetOverviewExampleSheet
];
