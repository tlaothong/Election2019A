import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { PoliticalPartyScorePage } from '../pages/political-party-score/political-party-score';
import { KadGraphPage } from '../pages/kad-graph/kad-graph';
import { PartyGraphPage } from '../pages/party-graph/party-graph';
import { AreaElectionPage } from '../pages/area-election/area-election';
import { TeamPage } from '../pages/team/team';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PoliticalPartyScorePage,
    KadGraphPage,
    PartyGraphPage,
    AreaElectionPage,
    TeamPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PoliticalPartyScorePage,
    KadGraphPage,
    PartyGraphPage,
    AreaElectionPage,
    TeamPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
