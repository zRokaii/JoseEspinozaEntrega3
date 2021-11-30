import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {IonicStorageModule} from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { DBTaskService } from 'src/app/services/dbtask.service';
import { AuthGardService } from 'src/app/services/auth-gard.service';
import { AuthenticationService } from "src/app/services/authentication.service";
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
    IonicStorageModule.forRoot({
      name: 'mydb',
      driverOrder: [Drivers.IndexedDB,Drivers.LocalStorage]
    }),],
    providers: [
      StatusBar,
      SplashScreen,
      SQLite,
      DBTaskService,
      AuthGardService,
      AuthenticationService,
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule {}

