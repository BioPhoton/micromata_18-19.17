import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveRouteWarningComponent } from './leave-route-warning.component';

describe('LeaveRouteWarningComponent', () => {
  let component: LeaveRouteWarningComponent;
  let fixture: ComponentFixture<LeaveRouteWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveRouteWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveRouteWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
