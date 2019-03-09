import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ScoreParty, GlobalVaraible, ScoreOther } from '../../app/model';
import { PoliticalPartyScorePage } from '../political-party-score/political-party-score';
import { KadGraphPage } from '../kad-graph/kad-graph';
import { PartyGraphPage } from '../party-graph/party-graph';
import { TeamPage } from '../team/team';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listScoreParty: ScoreParty[];
  listScoreParty2: ScoreParty[];
  listScoreOther: ScoreParty[];
  otherScore: ScoreOther = new ScoreOther;
  urlImg: string;
  constructor(public navCtrl: NavController, public http: HttpClient) {
  }

  ionViewDidEnter() {
    this.listScoreParty = [];
    this.listScoreParty2 = [];
    this.listScoreOther = [];
    this.listScoreOther = [];
    this.http.get<ScoreParty[]>(GlobalVaraible.host + "GetApp1AllScoreParty")
      .subscribe(data => {
        this.listScoreParty = data;
        console.log("ei1");
        console.log(this.listScoreParty);
        this.listScoreParty2 = this.listScoreParty.filter(it => it.idParty == "034" || it.idParty == "077" || it.idParty == "001"
          || it.idParty == "192" || it.idParty == "177" || it.idParty == "063"
          || it.idParty == "055" || it.idParty == "145" || it.idParty == "181"
          || it.idParty == "149" || it.idParty == "176" || it.idParty == "187");
        console.log("eiei1");
        console.log(this.listScoreParty2);
        this.listScoreParty2.forEach(data => {
          data.urlImg = "../../assets/imgs/" + data.idParty + ".png";
        });
        this.listScoreOther = this.listScoreParty.filter(it => it.idParty != "034" && it.idParty != "077" && it.idParty != "001"
          && it.idParty != "192" && it.idParty != "177" && it.idParty != "063"
          && it.idParty != "055" && it.idParty != "145" && it.idParty != "181"
          && it.idParty != "149" && it.idParty != "176" && it.idParty != "187");
        console.log("eiei2");
        console.log(this.listScoreOther);
        this.otherScore = { haveScore: 0, scoreArea: 0, scorePartyList: 0, scorePercent: 0, isChecked: true, status: true };
        this.listScoreOther.forEach(data => {
          this.otherScore.haveScore += data.haveScore;
          this.otherScore.scoreArea += data.areaScore;
          this.otherScore.scorePartyList += data.nameListScore;
          this.otherScore.scorePercent += data.percentScore;
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
  goTeam() {
    this.navCtrl.push(TeamPage, { _listScoreParty: this.listScoreParty });
  }
}
