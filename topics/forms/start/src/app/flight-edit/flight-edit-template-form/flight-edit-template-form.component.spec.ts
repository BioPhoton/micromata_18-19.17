import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilghtEditTemplateFormComponent } from './flight-edit-template-form.component';

describe('FilghtEditTemplateFormComponent', () => {
  let component: FilghtEditTemplateFormComponent;
  let fixture: ComponentFixture<FilghtEditTemplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilghtEditTemplateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilghtEditTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
