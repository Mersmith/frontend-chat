import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieConfirmationComponent } from './movie-confirmation.component';

describe('MovieConfirmationComponent', () => {
  let component: MovieConfirmationComponent;
  let fixture: ComponentFixture<MovieConfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieConfirmationComponent]
    });
    fixture = TestBed.createComponent(MovieConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
