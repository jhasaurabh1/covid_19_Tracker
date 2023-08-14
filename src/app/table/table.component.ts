import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RxStoreService } from '../rx-store.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { StateWiseData } from '../covid-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
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
