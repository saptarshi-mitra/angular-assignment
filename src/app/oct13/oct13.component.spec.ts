import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct13Component } from './oct13.component';

describe('Oct13Component', () => {
  let component: Oct13Component;
  let fixture: ComponentFixture<Oct13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Oct13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
