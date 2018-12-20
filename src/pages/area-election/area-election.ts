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

  areaPolitical: string;
  urlPowerBi : string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidEnter() {
    this.areaPolitical = this.navParams.data._areaPolitical;
    console.log(this.areaPolitical);

    // switch (this.areaPolitical) {
    //   case 1:
    //     this.headerAreaScore = "กทม. เขต 1";
    //     break;
    //   case 2:
    //     this.headerAreaScore = "กทม. เขต 2";
    //     break;
    //   case 3:
    //     this.headerAreaScore = "กทม. เขต 3";
    //     break;
    //   case 4:
    //     this.headerAreaScore = "กทม. เขต 4";
    //     break;
    //   case 5:
    //     this.headerAreaScore = "กทม. เขต 5";
    //     break;
    //   case 6:
    //     this.headerAreaScore = "กทม. เขต 6";
    //     break;
    //   case 7:
    //     this.headerAreaScore = "กทม. เขต 7";
    //     break;
    //   default:
    //     break;
    // }
  }

}


