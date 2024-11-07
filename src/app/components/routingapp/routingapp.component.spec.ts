import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingappComponent } from './routingapp.component';

describe('RoutingappComponent', () => {
  let component: RoutingappComponent;
  let fixture: ComponentFixture<RoutingappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingappComponent]
    });
    fixture = TestBed.createComponent(RoutingappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
