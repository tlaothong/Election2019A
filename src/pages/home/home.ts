import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ScoreParty, GlobalVaraible } from '../../app/model';
import { PoliticalPartyScorePage } from '../political-party-score/political-party-score';
import { KadGraphPage } from '../kad-graph/kad-graph';
import { PartyGraphPage } from '../party-graph/party-graph';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listScoreParty: ScoreParty[];
  urlImg: string;
  constructor(public navCtrl: NavController, public http: HttpClient) {
  }

  ionViewDidEnter() {
    this.listScoreParty = [];
    this.http.get<ScoreParty[]>(GlobalVaraible.host + "GetApp1AllScoreParty")
      .subscribe(data => {
        this.listScoreParty = data;
        this.listScoreParty.forEach(data => {
          data.urlImg = "../../assets/imgs/" + data.idParty + ".png";
        });
      });
  }

  goHaveScore() {
    this.navCtrl.push(PoliticalPartyScorePage, { _listScoreParty: this.listScoreParty });
  }
  goAreaScoreGraph() {
    this.navCtrl.push(KadGraphPage, { _listScoreParty: this.listScoreParty });
  }
  goPartyListGraph() {
    this.navCtrl.push(PartyGraphPage, { _listScoreParty: this.listScoreParty });
  }
}
