import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-bar-chart',
  templateUrl: './custom-bar-chart.component.html',
  styleUrls: ['./custom-bar-chart.component.css']
})
export class CustomBarChartComponent implements OnInit {

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];

  // tslint:disable-next-line:no-inferrable-types
  public barChartType: string = 'bar';
  // tslint:disable-next-line:no-inferrable-types
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series C' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
