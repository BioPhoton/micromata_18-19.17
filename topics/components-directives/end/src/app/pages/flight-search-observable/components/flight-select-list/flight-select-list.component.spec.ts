import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSelectListComponent } from './flight-select-list.component';

describe('FlightSelectListComponent', () => {
  let component: FlightSelectListComponent;
  let fixture: ComponentFixture<FlightSelectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightSelectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
