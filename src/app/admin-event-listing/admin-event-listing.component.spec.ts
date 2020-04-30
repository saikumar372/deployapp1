import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEventListingComponent } from './admin-event-listing.component';

describe('AdminEventListingComponent', () => {
  let component: AdminEventListingComponent;
  let fixture: ComponentFixture<AdminEventListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEventListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEventListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
