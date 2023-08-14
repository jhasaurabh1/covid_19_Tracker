import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import { RxStoreService } from '../rx-store.service';

@Component({
  template: `
    <div class="chart-container" style="display: flex; justify-content: center; align-items: center; height: 100vh;">
      <div #chartContainer id="covidChart" style="width: 100%; height : auto; margin-top: -210px"></div>
    </div>
  `,
})
export class GraphComponent implements OnInit {
  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;

  constructor(private apiStore: RxStoreService) { }

  ngOnInit(): void {
    this.apiStore.getCovidList().subscribe((data: any) => {
      const seriesData = data.cases_time_series.map((entry: any) => ({
        x: new Date(entry.dateymd).getTime(),
        y: parseInt(entry.totalconfirmed),
      }));
      const activeData = data.cases_time_series.map((entry: any) => ({
        x: new Date(entry.dateymd).getTime(),
        y: parseInt(entry.totalconfirmed) - parseInt(entry.totalrecovered) - parseInt(entry.totaldeceased),
      }));
      const deathsData = data.cases_time_series.map((entry: any) => ({
        x: new Date(entry.dateymd).getTime(),
        y: parseInt(entry.totaldeceased),
      }));

      Highcharts.chart(this.chartContainer.nativeElement, {
        chart: {
          type: 'spline',
          spacing: [20, 10, 20, 10],
          animation: true
        },
        title: {
          text: 'COVID-19 Time Tracker',
        },
        xAxis: {
          type: 'datetime',
          title: {
            text: 'Date',
          },
        },
        yAxis: {
          title: {
            text: 'Total Cases',
          },
        },
        plotOptions: {
          line: {
            marker: {
              enabled: false, // Disable markers on data points
            },
          },
        },
        series: [
          {
            name: 'Total Confirmed Cases',
            type: 'spline',
            data: seriesData,
          },
          {
            name: 'Total Active Cases',
            type: 'spline',
            data: activeData,
          },
          {
            name: 'Total Deaths',
            type: 'spline',
            data: deathsData,
          },
        ],
      });
    });
  }
}
