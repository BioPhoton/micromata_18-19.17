import {MyDatePipe} from "./my-date.pipe";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Component} from "@angular/core";


describe('MyDatePipe', () => {


  describe('MyDatePipe pipe without template', () => {

    it('create an instance', () => {
      const pipe = new MyDatePipe();
      expect(pipe).toBeTruthy();
    });

    const pipe = new MyDatePipe();

    it('should transform a date to ms', () => {
      const zeroDate = new Date("1970-01-01T01:00:00");
      expect(pipe.transform(zeroDate)).toBe(0 + 'ms');

      const oneDay = zeroDate.setDate(2);
      expect(pipe.transform(oneDay)).toBe((1000 * 60 * 60 * 24) + 'ms');
    });

    it('should transform and accept a custom suffix', () => {
      const zeroDate = new Date("1970-01-01T01:00:00");
      expect(pipe.transform(zeroDate, 'MS')).toBe(0 + 'MS');

      const oneDay = zeroDate.setDate(2);
      expect(pipe.transform(oneDay, 'MS')).toBe((1000 * 60 * 60 * 24) + 'MS');
    });

  });


  describe('MyDatePipe pipe with template', () => {

    // creating a component to run tests against
    @Component({
      template: `{{date | myDate:suffix }}`
    })
    class TestComponent {
      suffix: string;
      date: Date = new Date('1970-01-01T01:00:00');
    }

    // Holds information about mounted component
    // can be used detect changes
    // access debug element
    // access native element
    // <T> generic type relate test component with component fixture
    let fixture: ComponentFixture<TestComponent>;
    // ref to component
    let component: TestComponent;

    // ref to html element
    let el: HTMLElement;

    // run before each test ( it() )
    beforeEach(() => {
      // similar to NgModule
      TestBed.configureTestingModule({
        declarations: [
          MyDatePipe,
          TestComponent
        ]
      });

      // create the component
      fixture = TestBed.createComponent(TestComponent);
      // pull instance
      component = fixture.componentInstance;
      // pull native element
      el = fixture.nativeElement;
      /**/
    });

    it('should render a component', () => {
      // runs onInit and other lifecycle hooks
      fixture.detectChanges();
      expect(el).toBeDefined();
    });

    it('should transform to time in ms', () => {
      fixture.detectChanges();
      expect(el.textContent).toBe(0 + "ms");
      component.date = new Date(component.date.setDate(2));
      fixture.detectChanges();
      expect(el.textContent).toBe(1000 * 60 * 60 * 24 + "ms");
    });


    it('should transform and accept custom suffix', () => {
      component.suffix = 'MS';
      fixture.detectChanges();
      expect(el.textContent).toBe(0 + "MS");
      component.date = new Date(component.date.setDate(2));
      fixture.detectChanges();
      expect(el.textContent).toBe(1000 * 60 * 60 * 24 + "MS");
    });

  });

});
