import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

registerLocaleData(en);

const antDesignIcons = AllIcons as { //Loading the icons of the ng-zorro module to be used in the application. 
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]) //icons get injected in the application using providers array so that we can use icons 

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    ///Modules we used in layout of our app
    NzLayoutModule,
    NzIconModule,
    NzCollapseModule,
    NzMenuModule,
    NzBreadCrumbModule
  ],
  providers: [ //Depencency injection of all the services with help of which angular will be helping you load icons and other configuration of ng zorro (UI module we are using)
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons }
  ],
  bootstrap: [AppComponent] //Here we bootstrap our app component into the browser. after this happens, the browser does not to reload the app again and again everytime the router link changes 
})
export class AppModule { }
