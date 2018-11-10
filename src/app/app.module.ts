import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomBarChartComponent } from './custom-bar-chart/custom-bar-chart.component';
import { CustomPieChartComponent } from './custom-pie-chart/custom-pie-chart.component';
import { CustomRadarChartComponent } from './custom-radar-chart/custom-radar-chart.component';
import { CustomDoughnutChartComponent } from './custom-doughnut-chart/custom-doughnut-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomBarChartComponent,
    CustomPieChartComponent,
    CustomRadarChartComponent,
    CustomDoughnutChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
