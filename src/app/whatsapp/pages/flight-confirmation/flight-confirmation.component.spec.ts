import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightConfirmationComponent } from './flight-confirmation.component';

describe('FlightConfirmationComponent', () => {
  let component: FlightConfirmationComponent;
  let fixture: ComponentFixture<FlightConfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightConfirmationComponent]
    });
    fixture = TestBed.createComponent(FlightConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
