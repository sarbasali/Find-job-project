import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAcntComponent } from './profile-acnt.component';

describe('ProfileAcntComponent', () => {
  let component: ProfileAcntComponent;
  let fixture: ComponentFixture<ProfileAcntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileAcntComponent]
    });
    fixture = TestBed.createComponent(ProfileAcntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
