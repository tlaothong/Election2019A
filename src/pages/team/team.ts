import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScoreParty, otherScore } from '../../app/model';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the TeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team',
  templateUrl: 'team.html',
})
export class TeamPage {
  listScoreParty: ScoreParty[];
  listScoreOther: ScoreParty[];
  other: otherScore = new otherScore;
  enemy: any[];
  friend: any[];
  hesitate: any[]
  totalHaveFriend: any = 0
  totalAreaFriend: any = 0
  totalNameListFriend: any = 0

  totalHaveEnemy: any = 0
  totalAreaEnemy: any = 0
  totalNameListEnemy: any = 0

  totalHaveHesitate: any = 0
  totalAreaHesitate: any = 0
  totalNameListHesitate: any = 0

  statusFriend: boolean = false
  statusEnemy: boolean = false
  statusHesitate: boolean = false
  urlImg: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.listScoreParty = this.navParams.get('_listScoreParty');
    console.log(this.listScoreParty);
    this.friend = this.listScoreParty.filter(it => it.statusAllies == "ฝ่ายเรา");
    this.enemy = this.listScoreParty.filter(it => it.statusAllies == "ตรงข้าม");
    this.hesitate = this.listScoreParty.filter(it => it.statusAllies == "ลังเล");
    console.log(this.friend);
    console.log(this.enemy);
    console.log(this.hesitate);
    this.enemy.forEach(it => {
      this.totalHaveEnemy += it.haveScore;
      this.totalAreaEnemy += it.areaScore;
      this.totalNameListEnemy += it.nameListScore;
    });
    this.friend.forEach(it => {
      this.totalHaveFriend += it.haveScore;
      this.totalAreaFriend += it.areaScore;
      this.totalNameListFriend += it.nameListScore;
    });
    this.hesitate.forEach(it => {
      this.totalHaveHesitate += it.haveScore;
      this.totalAreaHesitate += it.areaScore;
      this.totalNameListHesitate += it.nameListScore;
    });
    console.log(this.totalHaveFriend, this.totalAreaFriend, this.totalNameListFriend);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamPage');
  }
  showPartyFriend() {
    if (this.statusFriend == false) {
      this.statusFriend = true
    } else {
      this.statusFriend = false
    }
  }

  showPartyEnemy() {
    if (this.statusEnemy == false) {
      this.statusEnemy = true
    } else {
      this.statusEnemy = false
    }
  }

  showPartyHesitate() {
    if (this.statusHesitate == false) {
      this.statusHesitate = true
    } else {
      this.statusHesitate = false
    }
  }


}
