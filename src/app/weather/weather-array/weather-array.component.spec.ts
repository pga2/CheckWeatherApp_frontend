import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherArrayComponent } from './weather-array.component';

describe('WeatherArrayComponent', () => {
  let component: WeatherArrayComponent;
  let fixture: ComponentFixture<WeatherArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
