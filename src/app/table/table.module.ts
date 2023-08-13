import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { RouterModule } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzMessageModule } from 'ng-zorro-antd/message';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    NzDividerModule,
    NzTableModule,
    NzMessageModule,
    RouterModule.forChild([{path : '', component : TableComponent}]) 
  ]
})
export class TableModule { }
