import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartParkingComponent } from './smart-parking.component';

describe('SmartParkingComponent', () => {
  let component: SmartParkingComponent;
  let fixture: ComponentFixture<SmartParkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartParkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
