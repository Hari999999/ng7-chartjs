import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pie-chart',
  templateUrl: './custom-pie-chart.component.html',
  styleUrls: ['./custom-pie-chart.component.css']
})
export class CustomPieChartComponent implements OnInit {
  public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  // tslint:disable-next-line:no-inferrable-types
  public pieChartType: string = 'pie';
  constructor() { }

  ngOnInit() {
  }

}
