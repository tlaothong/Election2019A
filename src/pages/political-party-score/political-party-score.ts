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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.typeScore = this.navParams.data._typeScore;
    console.log(this.typeScore);
  }

  ionViewDidLoad() {
    
  }

}
