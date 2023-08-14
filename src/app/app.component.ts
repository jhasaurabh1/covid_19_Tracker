import { Component } from '@angular/core';
import { RxStoreService } from './rx-store.service';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
interface ListItem { //Interface for the list to store values with the stated types only, if we enter something else it will throw errors 
  id: number;
  value: string;
  routerLink: String;
  icon: String;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CVD19-tracker'; //App Name
  isCollapsed = false;
  breadCrumb: string = ''; 

  constructor(private route: Router) {
    this.route.events.pipe( //Here we are piping through the events got registered in the route instance of Router in constructor
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => { //Here we are subscribing to the event we got filtered out with the instanceof NavigationEnd
      const segments = event.url.split('/').filter(segment => segment !== ''); //filter out if the segment is not empty 
      if (segments.length > 0) { //check if it is not empty 
        const firstSegment = segments[0].charAt(0).toUpperCase() + segments[0].slice(1); //Switch the URL TO Upper case and assign it to first segment
        segments[0] = firstSegment; //retrieve the same 
      }
      const fullPath = segments.join(''); //Join the whole path to be used
      this.breadCrumb = fullPath; //Assign it to the variable
    });
  }

  listItems: ListItem[] = [ //This list will be fetched on HTML using *ngFor 
    { id: 1, value: 'Table', routerLink: '/table', icon: 'ordered-list' },
    { id: 2, value: 'Graph', routerLink: '/graph', icon: 'line-chart' },
    { id: 3, value: 'Form', routerLink: '/form', icon: 'form' }
  ];
}
