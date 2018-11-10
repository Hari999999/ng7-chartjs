import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRadarChartComponent } from './custom-radar-chart.component';

describe('CustomRadarChartComponent', () => {
  let component: CustomRadarChartComponent;
  let fixture: ComponentFixture<CustomRadarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomRadarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomRadarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
