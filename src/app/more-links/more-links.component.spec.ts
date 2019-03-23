import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreLinksComponent } from './more-links.component';

describe('MoreLinksComponent', () => {
  let component: MoreLinksComponent;
  let fixture: ComponentFixture<MoreLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
