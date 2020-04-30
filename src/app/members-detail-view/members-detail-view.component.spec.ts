import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersDetailViewComponent } from './members-detail-view.component';

describe('MembersDetailViewComponent', () => {
  let component: MembersDetailViewComponent;
  let fixture: ComponentFixture<MembersDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
