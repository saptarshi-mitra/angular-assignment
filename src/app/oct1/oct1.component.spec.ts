import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct1Component } from './oct1.component';

describe('Oct1Component', () => {
  let component: Oct1Component;
  let fixture: ComponentFixture<Oct1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Oct1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
