import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileIMGComponent } from './profile-img.component';

describe('ProfileIMGComponent', () => {
  let component: ProfileIMGComponent;
  let fixture: ComponentFixture<ProfileIMGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileIMGComponent]
    });
    fixture = TestBed.createComponent(ProfileIMGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
