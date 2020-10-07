import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct7Component } from './oct7.component';

describe('Oct7Component', () => {
  let component: Oct7Component;
  let fixture: ComponentFixture<Oct7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Oct7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
