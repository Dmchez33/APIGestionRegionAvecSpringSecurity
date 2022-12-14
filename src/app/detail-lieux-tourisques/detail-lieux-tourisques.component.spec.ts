import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLieuxTourisquesComponent } from './detail-lieux-tourisques.component';

describe('DetailLieuxTourisquesComponent', () => {
  let component: DetailLieuxTourisquesComponent;
  let fixture: ComponentFixture<DetailLieuxTourisquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailLieuxTourisquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailLieuxTourisquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
