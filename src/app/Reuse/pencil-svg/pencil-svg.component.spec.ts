import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PencilSvgComponent } from './pencil-svg.component';

describe('PencilSvgComponent', () => {
  let component: PencilSvgComponent;
  let fixture: ComponentFixture<PencilSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PencilSvgComponent]
    });
    fixture = TestBed.createComponent(PencilSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
