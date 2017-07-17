import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsHistoryComponent } from './flights-history.component';

describe('FlightsHistoryComponent', () => {
  let component: FlightsHistoryComponent;
  let fixture: ComponentFixture<FlightsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
