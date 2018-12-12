import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AreaElectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-area-election',
  templateUrl: 'area-election.html',
})
export class AreaElectionPage {

  areaPolitical : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.areaPolitical = this.navParams.get('_area');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AreaElectionPage');
  }

}
