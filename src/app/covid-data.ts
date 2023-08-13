export interface CovidData {
    cases_time_series: CaseTimeSeries[];
    statewise: StateWiseData[];
    tested: TestedData[];
  }
  
  export interface CaseTimeSeries {
    dailyconfirmed: string;
    dailydeceased: string;
    dailyrecovered: string;
    date: string;
    totalconfirmed: string;
    totaldeceased: string;
    totalrecovered: string;
  }
  
  export interface StateWiseData {
    active: string;
    confirmed: string;
    deaths: string;
    deltaconfirmed: string;
    deltadeaths: string;
    deltarecovered: string;
    lastupdatedtime: string;
    recovered: string;
    state: string;
    statecode: string;
    statenotes: string;
  }
  
  export interface TestedData {
    individualstestedperconfirmedcase: string;
    positivecasesfromsamplesreported: string;
    samplereportedtoday: string;
    source: string;
    testsconductedbyprivatelabs: string;
    testsperconfirmedcase: string;
    testspermillion: string;
    totalindividualstested: string;
    totalpositivecases: string;
    totalsamplestested: string;
    updatetimestamp: string;
  }