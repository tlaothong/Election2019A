import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ElectionModel, GlobalVaraible } from '../../app/model';

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
  listArea: ElectionModel[] = [];
  filter: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public http: HttpClient) {

    this.http.get("http://pbiebeded.azurewebsites.net/api/values").subscribe(
      it => {
        this.token = it
        console.log("this.token");
        console.log(this.token);
      }
    );
  }

  ionViewDidEnter() {
    this.http.get<ElectionModel[]>("http://localhost:5000/api/Election/GetAll")
      .subscribe(data => {
        this.listArea = data;
      });
  }

  onClick(event, tokens) {
    console.log(event);
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.offsetParent.id;
    this.areaPolitical = idAttr;
    this.token = tokens
    this.navCtrl.push("AreaElectionPage", {
      _areaPolitical: this.areaPolitical,
      tokenid: tokens

    });
  }

  goFilter() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Filter',
      buttons: [
        {
          text: 'แสดงทั้งหมด',
          handler: () => {
            this.http.get<ElectionModel[]>("http://localhost:5000/api/Election/GetAll")
              .subscribe(data => {
                this.listArea = data;
              });
          }
        },
        {
          text: 'เขตที่ชนะขาด',
          handler: () => {
            this.filter = "ชนะขาด";
            this.http.get<ElectionModel[]>("http://localhost:5000/api/Election/GetFilter/" + this.filter)
              .subscribe(data => {
                this.listArea = data;
              });
          }
        },
        {
          text: 'เขตที่แพ้ขาด',
          handler: () => {
            this.filter = "แพ้ขาด";
            this.http.get<ElectionModel[]>("http://localhost:5000/api/Election/GetFilter/" + this.filter)
              .subscribe(data => {
                this.listArea = data;
              });
          }
        },
        {
          text: 'เขตที่เสมอ',
          handler: () => {
            this.filter = "สูสี หนีแพ้";
            this.http.get<ElectionModel[]>("http://localhost:5000/api/Election/GetFilter/" + this.filter)
              .subscribe(data => {
                this.listArea = data;
              });
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
