import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-doughnut-chart',
  templateUrl: './custom-doughnut-chart.component.html',
  styleUrls: ['./custom-doughnut-chart.component.css']
})
export class CustomDoughnutChartComponent implements OnInit {

  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  // tslint:disable-next-line:no-inferrable-types
  public doughnutChartType: string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
