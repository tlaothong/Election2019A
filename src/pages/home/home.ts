import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  score1: string = "คะแนนพึงมี";
  score2: string = "คะแนนเขต";
  score3: string = "คะแนนสัดส่วน";

  constructor(public navCtrl: NavController) {

  }

  goPoliticalScore(typeScore: string) {
    this.navCtrl.push("PoliticalPartyScorePage", { _typeScore: typeScore });
  }

}
