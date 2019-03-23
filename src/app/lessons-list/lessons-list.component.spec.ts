import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { lessons-listComponent } from './lessons-list.component';

describe('lessons-listComponent', () => {
  let component: lessons-listComponent;
  let fixture: ComponentFixture<lessons-listComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ lessons-listComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(lessons-listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
