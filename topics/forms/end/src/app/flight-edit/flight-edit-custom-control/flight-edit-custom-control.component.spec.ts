import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightEditCustomControlComponent } from './flight-edit-custom-control.component';

describe('FlightEditCustomControlComponent', () => {
  let component: FlightEditCustomControlComponent;
  let fixture: ComponentFixture<FlightEditCustomControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightEditCustomControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightEditCustomControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
