import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CovidData } from './covid-data'

@Injectable({
  providedIn: 'root'
})

export class RxStoreService {
  public covidUrl : string = environment.covidBaseUrl;
  public sendHeightOfInnerContent = new Subject<string>();

  constructor(private _http_: HttpClient) {}

  public observeHeight() : Observable<any>{ //Observable function to settle down the div height dynamically
    return this.sendHeightOfInnerContent.asObservable();
  }

  public getCovidList() : Observable<any>{ //API Call for getting the covid lists
    return this._http_.get<CovidData[]>(this.covidUrl)
  }
}
