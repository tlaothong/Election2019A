import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ElectionModel,GlobalVaraible } from '../../app/model';


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
  token: any={};
  listArea: ElectionModel[] = [];
  filter: string;
  groupid: any = {};
  reportid: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public http: HttpClient, public modalCtrl: ModalController) {

    this.filter = "ตัวกรอง"
  }

  ionViewDidEnter() {
    // this.groupid = "45f95249-7ae8-4335-899b-d66de3334065";
    // this.reportid = "e00e412c-d883-4fdb-a6eb-9bb3f699c1e2";
    // http://pbiebeded.azurewebsites.net/api/values/gettoken/groupid/reportid
    // http://pbiebeded.azurewebsites.net/api/values/gettoken/50ffda63-4985-4fdf-b052-c78cee9263ff/050e1df4-d497-4d73-a8a9-d1c50acc70d1
    this.http.get(GlobalVaraible.hostGetToken + GlobalVaraible.groupid + "/" + GlobalVaraible.reportid).subscribe(
      it => {
        this.token = it
        console.log("this.token");
        console.log(this.token);
      }
    );  
    if (this.filter == "แสดงทั้งหมด" || this.filter == "ตัวกรอง") {
      this.http.get<ElectionModel[]>(GlobalVaraible.host + "GetAll")
        .subscribe(data => {
          this.listArea = data;
        });
    }
    else if (this.filter == "ชนะขาด") {
      this.http.get<ElectionModel[]>(GlobalVaraible.host + "GetFilter/" + this.filter)
        .subscribe(data => {
          this.listArea = data;
        });
    }
    else if (this.filter == "แพ้ขาด") {
      this.http.get<ElectionModel[]>(GlobalVaraible.host + "GetFilter/" + this.filter)
        .subscribe(data => {
          this.listArea = data;
        });
    }
    else if (this.filter == "สูสี หนีแพ้") {
      this.http.get<ElectionModel[]>(GlobalVaraible.host + "GetFilter/" + this.filter)
        .subscribe(data => {
          this.listArea = data;
        });
    }
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
    //
    // const modal = this.modalCtrl.create("AreaElectionPage", {
    //   _areaPolitical: this.areaPolitical,
    //   tokenid: tokens

    // });
    // modal.present();
  }

  goFilter() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Filter',
      buttons: [
        {
          text: 'แสดงทั้งหมด',
          handler: () => {
            this.filter = "แสดงทั้งหมด"
            this.http.get<ElectionModel[]>("http://electionvars.azurewebsites.net/api/Election/GetAll")
              .subscribe(data => {
                this.listArea = data;
              });
          }
        },
        {
          text: 'เขตที่ชนะขาด',
          handler: () => {
            this.filter = "ชนะขาด";
            this.http.get<ElectionModel[]>("http://electionvars.azurewebsites.net/api/Election/GetFilter/" + this.filter)
              .subscribe(data => {
                this.listArea = data;
              });
          }
        },
        {
          text: 'เขตที่แพ้ขาด',
          handler: () => {
            this.filter = "แพ้ขาด";
            this.http.get<ElectionModel[]>("http://electionvars.azurewebsites.net/api/Election/GetFilter/" + this.filter)
              .subscribe(data => {
                this.listArea = data;
              });
          }
        },
        {
          text: 'เขตที่สูสี',
          handler: () => {
            this.filter = "สูสี";
            this.http.get<ElectionModel[]>("http://electionvars.azurewebsites.net/api/Election/GetFilter/" + this.filter)
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
