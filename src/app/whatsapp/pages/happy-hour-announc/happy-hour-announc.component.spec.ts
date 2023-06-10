import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyHourAnnouncComponent } from './happy-hour-announc.component';

describe('HappyHourAnnouncComponent', () => {
  let component: HappyHourAnnouncComponent;
  let fixture: ComponentFixture<HappyHourAnnouncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HappyHourAnnouncComponent]
    });
    fixture = TestBed.createComponent(HappyHourAnnouncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
