import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightEditReactiveFormComponent } from './flight-edit-reactive-form.component';

describe('FlightEditReactiveFormComponent', () => {
  let component: FlightEditReactiveFormComponent;
  let fixture: ComponentFixture<FlightEditReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightEditReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightEditReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
