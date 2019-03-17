import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { MindMapMain } from 'mind-map';
/** @title Responsive sidenav */

const HIERARCHY_RULES = {
  ROOT: {
    name: 'XX汽车有限公司',
    backgroundColor: '#7EC6E1',
    getChildren: () => [
      HIERARCHY_RULES.SALES_MANAGER,
      HIERARCHY_RULES.SHOW_ROOM,
      HIERARCHY_RULES.SALES_TEAM
    ]
  },
  SALES_MANAGER: {
    name: '销售经理',
    color: '#fff',
    backgroundColor: '#616161',
    getChildren: () => [
      HIERARCHY_RULES.SHOW_ROOM,
      HIERARCHY_RULES.SALES_TEAM
    ]
  },
  SHOW_ROOM: {
    name: '展厅',
    color: '#fff',
    backgroundColor: '#989898',
    getChildren: () => [
      HIERARCHY_RULES.SALES_TEAM
    ]
  },
  SALES_TEAM: {
    name: '销售小组',
    color: '#fff',
    backgroundColor: '#C6C6C6',
    getChildren: () => []
  }
};
 
const option = {
  container: 'jsmind_container',
  theme: 'normal',
  editable: true,
  depth: 4,
  hierarchyRule: HIERARCHY_RULES
};
 
const mind = {
  "format": "nodeTree",
    "data": {
      "id": 43,
      "topic": "xx车行",
      "selectedType": false,
      "backgroundColor": "#7EC6E1",
      "children": [
        {
          "id": 80,
          "color": "#fff",
          "topic": "show room",
          "direction": "right",
          "selectedType": "销售经理",
          "backgroundColor": "#616161",
          "children": []
        },
        {
          "id": 44,
          "color": "#fff",
          "topic": "销售经理",
          "direction": "right",
          "selectedType": "销售经理",
          "backgroundColor": "#616161",
          "children": [
            {
              "id": 46,
              "color": "#fff",
              "topic": "展厅经理",
              "direction": "right",
              "selectedType": "展厅",
              "backgroundColor": "#989898",
              "children": [
                {
                  "id": 49,
                  "color": "#fff",
                  "topic": "销售小组C",
                  "direction": "right",
                  "selectedType": "销售小组",
                  "backgroundColor": "#C6C6C6",
                  "children": []
                },
                {
                  "id": 51,
                  "color": "#fff",
                  "topic": "AMG销售",
                  "direction": "right",
                  "selectedType": "销售小组",
                  "backgroundColor": "#C6C6C6",
                  "children": []
                },
                {
                  "id": 47,
                  "color": "#fff",
                  "topic": "销售小组A",
                  "direction": "right",
                  "selectedType": "销售小组",
                  "backgroundColor": "#C6C6C6",
                  "children": []
                },
                {
                  "id": 48,
                  "color": "#fff",
                  "topic": "销售小组B",
                  "direction": "right",
                  "selectedType": "销售小组",
                  "backgroundColor": "#C6C6C6",
                  "children": []
                },
                {
                  "id": 50,
                  "color": "#fff",
                  "topic": "销售小组D",
                  "direction": "right",
                  "selectedType": "销售小组",
                  "backgroundColor": "#C6C6C6",
                  "children": []
                }
              ]
            }
          ]
        },
        {
          "id": 45,
          "color": "#fff",
          "topic": "Smart经理",
          "direction": "right",
          "selectedType": "销售经理",
          "backgroundColor": "#616161",
          "children": []
        }
      ]
    }
};
@Component({
  selector: 'ispace-mind-map',
  templateUrl: './mind-map.component.html',
  styleUrls: ['./mind-map.component.scss']
})
export class MindMapComponent implements OnDestroy, OnInit {
  
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  mindMap;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    console.log(this.mobileQuery);
  }

  ngOnInit() {
    this.mindMap = MindMapMain.show(option, mind);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  removeNode() {
    const selectedNode = this.mindMap.getSelectedNode();
    const selectedId = selectedNode && selectedNode.id;
 
    if (!selectedId) {
      return;
    }
    this.mindMap.removeNode(selectedId);
  }
 
  addNode() {
    const selectedNode = this.mindMap.getSelectedNode();
    if (!selectedNode) {
      return;
    }
 
    //const nodeId = customizeUtil.uuid.newid();
    //this.mindMap.addNode(selectedNode, nodeId);
  }
 
  getMindMapData() {
    const data = this.mindMap.getData().data;
    console.log('data: ', data);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
