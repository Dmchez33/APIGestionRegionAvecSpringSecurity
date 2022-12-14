import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DartModeTogleComponent } from './dart-mode-togle.component';

describe('DartModeTogleComponent', () => {
  let component: DartModeTogleComponent;
  let fixture: ComponentFixture<DartModeTogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DartModeTogleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DartModeTogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
