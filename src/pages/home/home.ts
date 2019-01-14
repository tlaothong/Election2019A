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
    this.groupid = "45f95249-7ae8-4335-899b-d66de3334065";
    this.reportidHaves = "5b1384d4-9ff1-4009-92c6-d8f2c363bcea";
    this.reportidKad = "e3f49c9d-921a-401e-a6d3-0f09008b30b3";
    this.reportidParty = "a0b0e38a-9b59-462d-ad73-26c31fc333be";
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
