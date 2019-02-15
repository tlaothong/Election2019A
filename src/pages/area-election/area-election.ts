import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as pbi from 'powerbi-client';
import { models, IEmbedConfiguration } from 'powerbi-client';
import { GlobalVaraible } from '../../app/model';

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
  [x: string]: any;

  areaPolitical: string;
  urlPowerBi: string;
  token: any = {};
  data: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  
    this.areaPolitical = this.navParams.get('nameArea');
  }

  ionViewDidEnter() {

  }
}



