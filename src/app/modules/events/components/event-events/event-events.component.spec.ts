import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEventsComponent } from './event-events.component';

describe('EventEventsComponent', () => {
  let component: EventEventsComponent;
  let fixture: ComponentFixture<EventEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
