import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  totalScore: number;
  areaScore: number;
  partitionScore: number;

  constructor(public navCtrl: NavController) {
    this.totalScore = 1;
    this.areaScore = 2;
    this.partitionScore = 3;
  }

  goPoliticalScore(typeScore: number) {
    this.navCtrl.push("PoliticalPartyScorePage", { _typeScore: typeScore });
  }
}
