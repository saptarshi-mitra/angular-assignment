import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct5Component } from './oct5.component';

describe('Oct5Component', () => {
  let component: Oct5Component;
  let fixture: ComponentFixture<Oct5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Oct5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
