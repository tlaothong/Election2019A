import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PoliticalPartyScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-political-party-score',
  templateUrl: 'political-party-score.html',
})
export class PoliticalPartyScorePage {

  typeScore: number;
  headerType: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidEnter() {
    this.typeScore = this.navParams.data._typeScore;
    switch (this.typeScore) {
      case 1:
        this.headerType = "คะแนนพึงมี";
        break;
      case 2:
        this.headerType = "คะแนนแบ่งเขต";
        break;
      case 3:
        this.headerType = "คะแนนสัดส่วน";
        break;
      default:
        break;
    }
  }

}
