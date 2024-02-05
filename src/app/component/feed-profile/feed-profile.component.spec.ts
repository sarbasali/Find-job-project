import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedProfileComponent } from './feed-profile.component';

describe('FeedProfileComponent', () => {
  let component: FeedProfileComponent;
  let fixture: ComponentFixture<FeedProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedProfileComponent]
    });
    fixture = TestBed.createComponent(FeedProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
