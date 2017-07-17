import {Component} from '@angular/core'
import {ComponentFixture, TestBed} from '@angular/core/testing'
import {MyDatePipe} from './my-date.pipe'


describe('MyDatePipe', () => {


  describe('MyDatePipe pipe without template', () => {

    it('create an instance', () => {
      const pipe = new MyDatePipe();
      expect(pipe).toBeTruthy();
    });

    const pipe = new MyDatePipe();

    it('should transform a date to ms', () => {
    });

    it('should transform and accept a custom suffix', () => {
    });

  });


  describe('MyDatePipe pipe with template', () => {

    // creating a component to run tests against
    @Component({
      template: `???`
    })
    class TestComponent {
    }

    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;
    let el: HTMLElement;
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          MyDatePipe,
          TestComponent
        ]
      });

      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      el = fixture.nativeElement;
    });

    it('should render a component', () => {
    });

    it('should transform to time in ms', () => {
    });

    it('should transform and accept custom suffix', () => {
    });

  });

});
