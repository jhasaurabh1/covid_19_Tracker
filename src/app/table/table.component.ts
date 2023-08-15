import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RxStoreService } from '../rx-store.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { StateWiseData } from '../covid-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [`
    .truncate-cell {
      max-width: 80px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .truncate-cell:hover {
      text-overflow: clip;
      overflow: visible;
      white-space: pre-wrap;
    }
    
    @media screen and (max-height: 768px) {
      .truncate-cell {
          max-width: 60px;
      }
    }
  `]
})
export class TableComponent implements OnInit {
  public listOfData: StateWiseData[] = [];
  public yScrollSize: string;
  public pagesize: number;
  public isLoadingShown = true;

  listOfCurrentPageData: readonly StateWiseData[] = [];

  constructor(private apiStore : RxStoreService, private message : NzMessageService) { 
    this.pagesize = screen.height <= 768 ? 5 : 20;
    this.yScrollSize = screen.height <= 768 ? '42vh' : '65vh';
  }

  ngOnInit(): void {
    this.apiStore.getCovidList().subscribe((res: any) => {
      if (res) {
        this.listOfData = res.statewise;
        this.isLoadingShown = false;
      } else {
        this.message.error('Server Error, Please Try Later');
      }
    });
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly StateWiseData[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
  }
}
