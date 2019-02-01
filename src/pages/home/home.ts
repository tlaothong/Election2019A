import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tokenHaves: any = {};
  tokenKad: any = {};
  tokenParty: any = {};
  groupid: any = {};
  reportidHaves: any = {};
  reportidKad: any = {};
  reportidParty: any = {};

  constructor(public navCtrl: NavController, public http: HttpClient) {
  }
  ionViewDidEnter() {
    this.groupid = "50ffda63-4985-4fdf-b052-c78cee9263ff";
    this.reportidHaves = "8ea002b8-7f30-4bee-a56d-432acfb5739d";
    this.reportidKad = "c699f062-a605-481e-9370-6f56d60b6659";
    this.reportidParty = "084d1e71-9dee-46d4-ac8c-7b30f5bdb7dc";
    // http://pbiebeded.azurewebsites.net/api/values/gettoken/groupid/reportid
    this.http.get("http://pbiebeded.azurewebsites.net/api/values/gettoken/" + this.groupid + "/" + this.reportidHaves).subscribe(
      it => {
        this.tokenHaves = it
        console.log("this.tokenHaves");
        console.log(this.tokenHaves);
      }
    );
    //
    this.http.get("http://pbiebeded.azurewebsites.net/api/values/gettoken/" + this.groupid + "/" + this.reportidKad).subscribe(
      it => {
        this.tokenKad = it
        console.log("this.reportidKad");
        console.log(this.tokenKad);
      }
    );
    // //
    this.http.get("http://pbiebeded.azurewebsites.net/api/values/gettoken/" + this.groupid + "/" + this.reportidParty).subscribe(
      it => {
        this.tokenParty = it
        console.log("this.reportidParty");
        console.log(this.tokenParty);
      }
    );
  }

  goPoliticalScore(tokenid01) {
    tokenid01 = this.tokenHaves 
    this.navCtrl.push("PoliticalPartyScorePage", {
      data01: tokenid01
    });
  }
  goKadGraph(tokenid02) {
    tokenid02 =  this.tokenKad 
    this.navCtrl.push("KadGraphPage", {
      data02: tokenid02
    });
  }
  goPartyGraph(tokenid03) {
    tokenid03 = this.tokenParty
    this.navCtrl.push("PartyGraphPage", {
      data03: tokenid03
    });
  }
}
