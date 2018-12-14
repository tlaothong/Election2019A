import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AreaElectionPage } from '../area-election/area-election';
import { NumberValueAccessor } from '@angular/forms/src/directives';

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
  
  area1 : number;
  area2 : number;
  area3 : number;
  area4 : number;
  area5 : number;
  area6 : number;
  area7 : number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
    this.area1 = 1;
    this.area2 = 2;
    this.area3 = 3;
    this.area4 = 4;
    this.area5 = 5;
    this.area6 = 6;
    this.area7 = 7;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElectoratePage');
  }

  goDetailAreaScore(area: number) {
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
