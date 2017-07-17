import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightEditDynamicFormComponent } from './flight-edit-dynamic-form.component';

describe('FlightEditDynamicFormComponent', () => {
  let component: FlightEditDynamicFormComponent;
  let fixture: ComponentFixture<FlightEditDynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightEditDynamicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightEditDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
