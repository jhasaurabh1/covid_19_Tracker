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
  public listOfData : any[] = [];
  public yScrollSize : string = '';
  public pagesize : number = 0;
  public divHeight : string = '';
  public isLoadingShown : boolean = true;

  listOfCurrentPageData: readonly StateWiseData[] = [];

  constructor(private apiStore : RxStoreService, private message : NzMessageService) { 
    if (screen.height == 768 || screen.height < 768) {
      this.pagesize = 5;
      this.yScrollSize = '42dvh'
    }
    if (screen.height > 800) {
      this.pagesize = 20;
      this.yScrollSize = '65dvh'
    }
  }

  ngOnInit(): void {
    this.apiStore.observeHeight().subscribe((res) => {
      this.divHeight = res;
    })
    this.apiStore.getCovidList().subscribe((res : any) => {
      if(res){
        this.listOfData = res.statewise;
        this.isLoadingShown = false;
      }
      else{
        this.message.error('Server Error, Please Try Later')
      }
    })
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly StateWiseData[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
  }


}
