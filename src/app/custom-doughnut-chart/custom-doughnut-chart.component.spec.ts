import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDoughnutChartComponent } from './custom-doughnut-chart.component';

describe('CustomDoughnutChartComponent', () => {
  let component: CustomDoughnutChartComponent;
  let fixture: ComponentFixture<CustomDoughnutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDoughnutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDoughnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
