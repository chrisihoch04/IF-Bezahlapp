import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SuperTabsModule } from 'ionic2-super-tabs';

import { CurrentPage } from '../pages/current/current';
import { FuturePage } from '../pages/future/future';
import { LoginPage } from '../pages/login/login';
import { ReceiptDetailPage } from '../pages/receipt-detail/receipt-detail';
import { ReceiptsPage } from '../pages/receipts/receipts';
import { SettingsPage } from '../pages/settings/settings';
import { PastPage } from '../pages/past/past';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CurrentPage,
    FuturePage,
    LoginPage,
    ReceiptDetailPage,
    ReceiptsPage,
    SettingsPage,
    TabsPage,
    PastPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CurrentPage,
    FuturePage,
    LoginPage,
    ReceiptDetailPage,
    ReceiptsPage,
    SettingsPage,
    TabsPage,
    PastPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}