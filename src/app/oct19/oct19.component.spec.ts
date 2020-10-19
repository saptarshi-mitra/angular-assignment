import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oct19Component } from './oct19.component';

describe('Oct19Component', () => {
  let component: Oct19Component;
  let fixture: ComponentFixture<Oct19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Oct19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Oct19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
