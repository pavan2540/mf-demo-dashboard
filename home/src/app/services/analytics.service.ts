import { Injectable } from '@angular/core';
import * as d3 from 'd3';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  createUserAnalyticsChart(data: any[], containerId: string) {
    const width = 400, height = 300, radius = Math.min(width, height) / 2;
    const svg = d3.select(`#${containerId}`).append('svg').attr('width', width).attr('height', height)
      .append('g').attr('transform', `translate(${width / 2}, ${height / 2})`);

    const pie = d3.pie<any>().value(d => d.value);
    const arc = d3.arc<any>().innerRadius(0).outerRadius(radius);
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const arcs = svg.selectAll('arc').data(pie(data)).enter().append('g').attr('class', 'arc');

    arcs.append('path').attr('d', arc).attr('fill', (d, i) => color(i.toString()));
  }

  createSalesAnalyticsChart(data: any[], containerId: string) {
    const width = 400, height = 300;
    const svg = d3.select(`#${containerId}`).append('svg').attr('width', width).attr('height', height);

    const x = d3.scaleBand().range([0, width]).domain(data.map(d => d.month)).padding(0.1);
    const y = d3.scaleLinear().range([height, 0]).domain([0, d3.max(data, d => d.sales)]);

    svg.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(x));
    svg.append('g').call(d3.axisLeft(y));

    svg.selectAll('.bar').data(data).enter().append('rect')
      .attr('class', 'bar').attr('x', d => x(d.month) ?? 0).attr('width', x.bandwidth())
      .attr('y', d => y(d.sales)).attr('height', d => height - y(d.sales)).attr('fill', 'steelblue');
  }
}
