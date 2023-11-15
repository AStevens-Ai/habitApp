import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HabitTrackingPage } from './habit-tracking.page';

describe('HabitTrackingPage', () => {
  let component: HabitTrackingPage;
  let fixture: ComponentFixture<HabitTrackingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HabitTrackingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
