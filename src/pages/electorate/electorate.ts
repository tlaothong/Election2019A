import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ElectionModel } from '../../app/model';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public http: HttpClient, public modalCtrl: ModalController) {


    this.filter = "ตัวกรอง"
  }

  ionViewDidEnter() {
    this.http.get("http://pbiebeded.azurewebsites.net/api/values").subscribe(
      it => {
        this.token = it
        console.log("this.token");
        console.log(this.token);
      }
    );  
    if (this.filter == "แสดงทั้งหมด" || this.filter == "ตัวกรอง") {
      this.http.get<ElectionModel[]>("http://electionvars.azurewebsites.net/api/Election/GetAll")
        .subscribe(data => {
          this.listArea = data;
        });
    }
    else if (this.filter == "ชนะขาด") {
      this.http.get<ElectionModel[]>("http://electionvars.azurewebsites.net/api/Election/GetFilter/" + this.filter)
        .subscribe(data => {
          this.listArea = data;
        });
    }
    else if (this.filter == "แพ้ขาด") {
      this.http.get<ElectionModel[]>("http://electionvars.azurewebsites.net/api/Election/GetFilter/" + this.filter)
        .subscribe(data => {
          this.listArea = data;
        });
    }
    else if (this.filter == "สูสี หนีแพ้") {
      this.http.get<ElectionModel[]>("http://electionvars.azurewebsites.net/api/Election/GetFilter/" + this.filter)
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
