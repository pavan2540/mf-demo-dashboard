import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WebVitalsService } from '../../services/web-vitals.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-web-vitals-chart',
  standalone: true,
  templateUrl: './web-vitals-chart.component.html',
  styleUrls: ['./web-vitals-chart.component.scss']
})
export class WebVitalsChartComponent implements OnInit, AfterViewInit {
  metrics: { name: string, value: number }[] = [];

  constructor(private webVitalsService: WebVitalsService) {}

  ngOnInit() {
    this.webVitalsService.getVitals().subscribe((metric) => {
      this.metrics.push(metric);
      this.updateChart();
    });
  }

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    const svg = d3.select('#vitals-chart')
      .append('svg')
      .attr('width', 400)
      .attr('height', 300);

    svg.append('g')
      .attr('class', 'chart-content')
      .attr('transform', 'translate(50, 20)');
  }

  updateChart() {
    const svg = d3.select('#vitals-chart svg');
    const content = svg.select('.chart-content');
    content.selectAll('*').remove();

    const xScale = d3.scaleBand()
      .domain(this.metrics.map(d => d.name))
      .range([0, 300])
      .padding(0.3);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(this.metrics, d => d.value)!])
      .range([200, 0]);

    content.selectAll('.bar')
      .data(this.metrics)
      .enter().append('rect')
      .attr('x', d => xScale(d.name)!)
      .attr('y', d => yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('height', d => 200 - yScale(d.value))
      .attr('fill', '#3498db');

    const xAxis = d3.axisBottom(xScale);
    content.append('g')
      .attr('transform', 'translate(0, 200)')
      .call(xAxis);

    const yAxis = d3.axisLeft(yScale);
    content.append('g').call(yAxis);
  }
}
