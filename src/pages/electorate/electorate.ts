import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { GlobalVaraible, ScoreArea } from '../../app/model';
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

  listArea: ScoreArea[];
  listFilter: string[];
  filter: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public http: HttpClient, public modalCtrl: ModalController) {

  }

  ionViewDidEnter() {
    this.filter = "all"
    this.listArea = [];
    this.http.get<ScoreArea[]>(GlobalVaraible.host + "GetAllAreaTable2")
      .subscribe(data => {
        this.listArea = data;
        console.log(this.listArea);

      });
    this.http.get<string[]>(GlobalVaraible.host + "GetAllTag")
      .subscribe(data => {
        this.listFilter = data;
        console.log(this.listFilter);

      });;
  }

  GoDetailArea(area: ScoreArea) {
    this.navCtrl.push(AreaElectionPage, { _area: area });
  }

  goFilter() {
    this.listArea = [];
    if (this.filter != "all") {
      this.http.get<ScoreArea[]>(GlobalVaraible.host + "GetAreaWithTag/" + this.filter)
        .subscribe(data => {
          this.listArea = data;
          console.log(this.listArea);

        });
      console.log(this.filter);
    }
    else {
      this.http.get<ScoreArea[]>(GlobalVaraible.host + "GetAllAreaTable2")
        .subscribe(data => {
          this.listArea = data;
          console.log(this.listArea);
        });
    }
  }
}
