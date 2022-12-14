import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuxTouristiquesComponent } from './lieux-touristiques.component';

describe('LieuxTouristiquesComponent', () => {
  let component: LieuxTouristiquesComponent;
  let fixture: ComponentFixture<LieuxTouristiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LieuxTouristiquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LieuxTouristiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
