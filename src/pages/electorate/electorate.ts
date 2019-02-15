import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
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
  listArea: ElectionModel[] = [];
  filter: string;
  groupid: any = {};
  reportid: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public http: HttpClient, public modalCtrl: ModalController) {

    this.filter = "ตัวกรอง"
  }

  ionViewDidEnter() {

    if (this.filter == "แสดงทั้งหมด" || this.filter == "ตัวกรอง") {
      this.http.get<ElectionModel[]>("https://electionvars.azurewebsites.net/api/ElectionV3/GetAllAreaTable2")
        .subscribe(data => {
          this.listArea = data;
          console.log(data);
          
        });
    }
    else if (this.filter == "ชนะ") {
      this.http.get<ElectionModel[]>("https://electionvars.azurewebsites.net/api/ElectionV3/GetAllAreaTable2" + this.filter)
        .subscribe(data => {
          this.listArea = data;
        });
    }
    else if (this.filter == "แพ้") {
      this.http.get<ElectionModel[]>("https://electionvars.azurewebsites.net/api/ElectionV3/GetAllAreaTable2" + this.filter)
        .subscribe(data => {
          this.listArea = data;
        });
    }
    else if (this.filter == "สูสี หนีแพ้") {
      this.http.get<ElectionModel[]>("https://electionvars.azurewebsites.net/api/ElectionV3/GetAllAreaTable2" + this.filter)
        .subscribe(data => {
          this.listArea = data;
        });
    }
  }

  onClick(event, idArea,nameArea) {
    console.log(event);
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.offsetParent.id;
    this.areaPolitical = idAttr;
    this.navCtrl.push("AreaElectionPage", {
      _areaPolitical: this.areaPolitical,
      idArea: idArea,
      nameArea: nameArea,

    });
  }

  goFilter() {
    console.log("Hello");
    
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Filter',
      buttons: [
        {
          text: 'แสดงทั้งหมด',
          handler: () => {
            this.filter = "แสดงทั้งหมด"
            this.http.get<ElectionModel[]>("https://electionvars.azurewebsites.net/api/ElectionV3/GetAllAreaTable2")
              .subscribe(data => {
                this.listArea = data;
              });
          }
        },
        {
          text: 'เขตที่ชนะขาด',
          handler: () => {
            this.filter = "ชนะ";
            this.http.get<ElectionModel[]>("https://electionvars.azurewebsites.net/api/ElectionV3/GetAllAreaTable2" + this.filter)
              .subscribe(data => {
                this.listArea = data;
              });
          }
        },
        {
          text: 'เขตที่แพ้ขาด',
          handler: () => {
            this.filter = "แพ้";
            this.http.get<ElectionModel[]>("https://electionvars.azurewebsites.net/api/ElectionV3/GetAllAreaTable2" + this.filter)
              .subscribe(data => {
                this.listArea = data;
              });
          }
        },
        // {
        //   text: 'เขตที่สูสี',
        //   handler: () => {
        //     this.filter = "สูสี";
        //     this.http.get<ElectionModel[]>("https://electionvars.azurewebsites.net/api/ElectionV3/GetAllAreaTable2" + this.filter)
        //       .subscribe(data => {
        //         this.listArea = data;
        //       });
        //   }
        // },
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
    console.log("OK");

  }
}
