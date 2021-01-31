// import { SqliteDbCopyMock } from './../../mocks/sqliteDbCopy/index';
// import { PlatformMock } from './../../mocks/platform/index';
import { Platform } from '@ionic/angular';
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
// import { SQLiteMock } from 'mocks/sqlite';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, SqliteDbCopy, SQLite
    // {provide: Platform, useClass: PlatformMock},
    // {provide: SqliteDbCopy, useClass: SqliteDbCopyMock},
    // {provide: SQLite, useClass: SQLiteMock}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
