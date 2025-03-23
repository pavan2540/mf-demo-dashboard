import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WebVitalsChartComponent } from './components/web-vitals-chart/web-vitals-chart.component';
import { AnalyticsDashboardComponent } from './components/user-analytics/user-sales-analytics.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, WebVitalsChartComponent, AnalyticsDashboardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
