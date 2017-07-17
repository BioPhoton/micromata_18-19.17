import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyControlComponent } from './my-control.component';

describe('MyControlComponent', () => {
  let component: MyControlComponent;
  let fixture: ComponentFixture<MyControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial value of 0', () => {
    expect(component.value).toBe(0);
  });


  it('should increment by 1', () => {
    component.increment();
    expect(component.value).toBe(1);
  });


  it('should decrement by 1', () => {
    component.decrement();
    expect(component.value).toBe(-1);
  });

});
