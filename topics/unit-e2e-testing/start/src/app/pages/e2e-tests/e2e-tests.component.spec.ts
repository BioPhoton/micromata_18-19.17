import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E2eTestsComponent } from './e2e-tests.component';

describe('E2eTestsComponent', () => {
  let component: E2eTestsComponent;
  let fixture: ComponentFixture<E2eTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E2eTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E2eTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
