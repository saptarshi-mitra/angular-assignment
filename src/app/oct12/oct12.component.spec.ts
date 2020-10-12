import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct12Component } from './oct12.component';

describe('Oct12Component', () => {
  let component: Oct12Component;
  let fixture: ComponentFixture<Oct12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Oct12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
