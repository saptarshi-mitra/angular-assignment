import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct6Component } from './oct6.component';

describe('Oct6Component', () => {
  let component: Oct6Component;
  let fixture: ComponentFixture<Oct6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Oct6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
