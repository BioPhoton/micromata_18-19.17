import { MyHighlightDirective } from './my-highlight.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing'
import {Component} from '@angular/core'

describe('MyHighlightDirective', () => {

  // creating a component to run tests against
  @Component({
    template: `<p id="target1">This is sample text!</p>`
  })
  class TestComponent {
  }

  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let target1: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent
      ]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should render a component', () => {
  });

  it('should apply class highlighted', () => {
  });

  it('should render color correctly', () => {
  });

  it('should render a component', () => {
  });

  it('should render custom color correctly', () => {
  });

});
