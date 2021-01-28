// import { DataServiceMock } from './../../mocks/dataService/index';
// import { DataService } from './core/model/services/data.service';
// import { SQLiteMock } from './../../mocks/sqlite/index';
import { SqliteDbCopy } from '@ionic-native/sqlite-db-copy/ngx';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SQLite } from '@ionic-native/sqlite/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    // {provide: DataService, useClass: DataServiceMock},
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy },SqliteDbCopy,SQLite
    // {provide: SQLite, useClass: SQLiteMock}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
