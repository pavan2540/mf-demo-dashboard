import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-analytics-dashboard',
  standalone: true,
  template: `
  <div class="analytics-container">
    <div class="chart-container">
      <h3>User Analytics</h3>
      <div id="userAnalyticsChart"></div>
    </div>
    <div class="chart-container">
      <h3>Sales Analytics</h3>
      <div id="salesAnalyticsChart"></div>
    </div>
  </div>
  `,
  styles: [` .analytics-container { display: flex; justify-content: space-around; }
  .chart-container { margin: 20px;}
    svg { width: 100%; height: 300px; }
  `]
})
export class AnalyticsDashboardComponent implements OnInit {
  userAnalyticsData = [
    { name: 'Active Users', value: 150 },
    { name: 'New Signups', value: 50 },
    { name: 'Churned Users', value: 20 }
  ];

  salesAnalyticsData = [
    { month: 'Jan', sales: 100 },
    { month: 'Feb', sales: 150 },
    { month: 'Mar', sales: 200 },
    { month: 'Apr', sales: 250 },
    { month: 'May', sales: 300 }
  ];

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit() {
    this.createUserAnalyticsChart();
    this.createSalesAnalyticsChart();
  }

  createUserAnalyticsChart() {
    this.analyticsService.createUserAnalyticsChart(this.userAnalyticsData, 'userAnalyticsChart');
  }

  createSalesAnalyticsChart() {
    this.analyticsService.createSalesAnalyticsChart(this.salesAnalyticsData, 'salesAnalyticsChart');
  }
}

