import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  totalScore: number;
  areaScore: number;
  partitionScore: number;
  token: any = {};

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.totalScore = 1;
    this.areaScore = 2;
    this.partitionScore = 3;
  }

  goPoliticalScore(typeScore: number) {
    this.navCtrl.push("PoliticalPartyScorePage", { _typeScore: typeScore });
  }
}
