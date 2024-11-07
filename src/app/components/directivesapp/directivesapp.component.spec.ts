import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesappComponent } from './directivesapp.component';

describe('DirectivesappComponent', () => {
  let component: DirectivesappComponent;
  let fixture: ComponentFixture<DirectivesappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesappComponent]
    });
    fixture = TestBed.createComponent(DirectivesappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
