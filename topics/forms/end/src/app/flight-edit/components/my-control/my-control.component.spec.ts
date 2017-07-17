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
});
