import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLieuxTouristiqueComponent } from './detail-lieux-touristique.component';

describe('DetailLieuxTouristiqueComponent', () => {
  let component: DetailLieuxTouristiqueComponent;
  let fixture: ComponentFixture<DetailLieuxTouristiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailLieuxTouristiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailLieuxTouristiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
