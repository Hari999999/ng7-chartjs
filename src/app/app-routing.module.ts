import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomBarChartComponent } from './custom-bar-chart/custom-bar-chart.component';
import { CustomDoughnutChartComponent } from './custom-doughnut-chart/custom-doughnut-chart.component';
import { CustomRadarChartComponent } from './custom-radar-chart/custom-radar-chart.component';
import { CustomPieChartComponent } from './custom-pie-chart/custom-pie-chart.component';

const routes: Routes = [
  {
    path: '',
    component: CustomBarChartComponent
  },
  {
    path: 'bar-chart',
    component: CustomBarChartComponent
  },
  {
    path: 'doughnut-chart',
    component: CustomDoughnutChartComponent
  },
  {
    path: 'radar-chart',
    component: CustomRadarChartComponent
  },
  {
    path: 'pie-chart',
    component: CustomPieChartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
