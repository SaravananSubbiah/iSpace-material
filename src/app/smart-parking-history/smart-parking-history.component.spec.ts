import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartParkingHistoryComponent } from './smart-parking-history.component';

describe('SmartParkingHistoryComponent', () => {
  let component: SmartParkingHistoryComponent;
  let fixture: ComponentFixture<SmartParkingHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartParkingHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartParkingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
