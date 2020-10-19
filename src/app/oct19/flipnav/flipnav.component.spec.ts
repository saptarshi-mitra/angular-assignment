import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipnavComponent } from './flipnav.component';

describe('FlipnavComponent', () => {
  let component: FlipnavComponent;
  let fixture: ComponentFixture<FlipnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
