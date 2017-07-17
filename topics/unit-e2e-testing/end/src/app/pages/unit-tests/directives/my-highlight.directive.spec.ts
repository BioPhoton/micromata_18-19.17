import { MyHighlightDirective } from './my-highlight.directive';
import {ComponentFixture, TestBed} from '@angular/core/testing'
import {Component} from '@angular/core'

describe('MyHighlightDirective', () => {

  // creating a component to run tests against
  @Component({
    template: `<p id="target1" myHighlight>This is sample text!</p>
               <p id="target2" myHighlight [color]="color">This is sample text!</p>`
  })
  class TestComponent {
    color: string = 'green';
  }
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let target1: HTMLElement;
  let target2: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MyHighlightDirective,
        TestComponent
      ]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    target1 = fixture.nativeElement.querySelector('#target1');
    target2 = fixture.nativeElement.querySelector('#target2');
  });

  it('should render a component', () => {
    fixture.detectChanges();
    expect(target1).toBeDefined();
  });

  it('should apply class highlighted', () => {
    fixture.detectChanges();
    expect(target1.className).toBe('highlighted');
  });

  it('should render color correctly', () => {
    fixture.detectChanges();
    expect(target1.style.color).toBe('rgb(255, 0, 0)');
  });

  it('should render a component', () => {
    fixture.detectChanges();
    expect(target2).toBeDefined();
  });

  it('should render custom color correctly', () => {
    fixture.detectChanges();
    expect(target2.style.color).toBe('green');
  });

});
