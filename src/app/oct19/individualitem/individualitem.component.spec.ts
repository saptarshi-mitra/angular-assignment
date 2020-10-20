import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualitemComponent } from './individualitem.component';

describe('IndividualitemComponent', () => {
  let component: IndividualitemComponent;
  let fixture: ComponentFixture<IndividualitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
