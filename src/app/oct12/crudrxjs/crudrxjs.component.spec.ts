import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudrxjsComponent } from './crudrxjs.component';

describe('CrudrxjsComponent', () => {
  let component: CrudrxjsComponent;
  let fixture: ComponentFixture<CrudrxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudrxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudrxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
