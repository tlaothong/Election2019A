import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

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
  token: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController,public http: HttpClient) {
    this.http.get("http://pbiebeded.azurewebsites.net/api/values").subscribe(
      it => {
        this.token = it
        console.log("this.token");
        console.log(this.token);
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElectoratePage');
  }

  onClick(event,tokens) {
    console.log(event);
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.offsetParent.id;
    this.areaPolitical = idAttr;
    this.token = tokens
    this.navCtrl.push("AreaElectionPage", { 
      _areaPolitical: this.areaPolitical,
      tokenid: tokens
       
    });
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
