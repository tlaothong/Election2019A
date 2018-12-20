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

  areaPolitical: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElectoratePage');
  }

  onClick(event) {
    console.log(event);
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.offsetParent.id;
    this.areaPolitical = idAttr;
    this.navCtrl.push("AreaElectionPage", { _areaPolitical: this.areaPolitical });
    console.log(idAttr);
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
