import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AreaElectionPage } from '../area-election/area-election';

/**
 * Generated class for the ElectoratePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-electorate',
  templateUrl: 'electorate.html',
})
export class ElectoratePage {

  nameArea1: string = "กทม. เขต1";
  nameArea2: string = "กทม. เขต2";
  nameArea3: string = "กทม. เขต3";
  nameArea4: string = "กทม. เขต4";
  nameArea5: string = "กทม. เขต5";
  nameArea6: string = "กทม. เขต6";
  nameArea7: string = "กทม. เขต7";
  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElectoratePage');
  }

  goDetailAreaScore(area: string) {
    this.navCtrl.push("AreaElectionPage", { _area: area });
  }

  goFilter() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Filter',
      buttons: [
        {
          text: 'เขตที่ชนะขาด',
          handler: () => {

          }
        },
        {
          text: 'เขตที่แพ้ขาด',
          handler: () => {

          }
        },
        {
          text: 'เขตที่เสมอ',
          handler: () => {

          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
