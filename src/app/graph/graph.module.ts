import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphComponent } from './graph.component';
import { RouterModule } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    GraphComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    RouterModule.forChild([{path : '', component : GraphComponent}])
  ]
})
export class GraphModule { }
