import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillUpComponent } from './fill-up.component';

describe('FillUpComponent', () => {
  let component: FillUpComponent;
  let fixture: ComponentFixture<FillUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FillUpComponent]
    });
    fixture = TestBed.createComponent(FillUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
