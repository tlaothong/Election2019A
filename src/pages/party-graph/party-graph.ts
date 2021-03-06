import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as pbi from 'powerbi-client';
import { models, IEmbedConfiguration } from 'powerbi-client';
import { ScoreParty, otherScore } from '../../app/model';
import { Chart } from 'chart.js';
/**
 * Generated class for the PartyGraphPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-party-graph',
  templateUrl: 'party-graph.html',
})
export class PartyGraphPage {

  listScoreParty: ScoreParty[];
  listScoreOther: ScoreParty[];
  other: otherScore = new otherScore;
  chart: [any];
  @ViewChild('barCanvas') barCanvas;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidEnter() {
    this.listScoreParty = this.navParams.get('_listScoreParty');
    this.listScoreParty.sort((a, b) => b.nameListScore - a.nameListScore);
    let xxx = this.listScoreParty;
    this.listScoreOther = this.listScoreParty.slice(5);
    console.log(this.listScoreOther);

    this.other = { name: "อื่นๆ", score: 0 };
    this.listScoreOther.forEach(data => {
      this.other.score += data.nameListScore;
    });
    console.log(this.other.score);
    function getRandomColorHex(index) {
      for (let i = 0; i < xxx.length; i++) {
        var color = "";
        if (xxx[index].nameInitial == "อ.น.ค.") {
          color = "#FF7F00"
        } else if (xxx[index].nameInitial == "ภท.") {
          color = "#00008B"
        } else if (xxx[index].nameInitial == "ปชป.") {
          color = "#00BFFF"
        } else if (xxx[index].nameInitial == "ทษช.") {
          color = "#0000EE"
        } else if (xxx[index].nameInitial == "สร.") {
          color = "#27408B"
        } else if (xxx[index].nameInitial == "พท.") {
          color = "#FF0000"
        } else if (xxx[index].nameInitial == "พปชร.") {
          color = "#4876FF"
        } else if (xxx[index].nameInitial == "รปช.") {
          color = "#0000FF"
        } else if (xxx[index].nameInitial == "ชทพ.") {
          color = "#FF69B4"
        } else if (xxx[index].nameInitial == "พช.") {
          color = "#CD0000"
        } else if (xxx[index].nameInitial == "ปชช.") {
          color = "#FFFF00"
        } else if (xxx[index].nameInitial == "ปช.") {
          color = "#CD0000"
        } else {
          color = "#7F7E7F"
        }
        console.log("color");
        console.log(color);
        console.log("xxxx");
        console.log(xxx[index]);
        return color;
      }
    }
    this.chart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        // labels: ["BJP", "INC", "AAP", "CPI", "CPI-M", "NCP"],
        labels: [this.listScoreParty[0].nameInitial, this.listScoreParty[1].nameInitial, this.listScoreParty[2].nameInitial
          , this.listScoreParty[3].nameInitial, this.listScoreParty[4].nameInitial, this.other.name],
        datasets: [{
          label: ['คะแนนแบบบัญชีรายชื่อ'],
          // data: [200, 50, 30, 15, 20, 34],
          data: [this.listScoreParty[0].nameListScore, this.listScoreParty[1].nameListScore, this.listScoreParty[2].nameListScore
            , this.listScoreParty[3].nameListScore, this.listScoreParty[4].nameListScore, this.other.score],
          backgroundColor: [
            getRandomColorHex(0),
            getRandomColorHex(1),
            getRandomColorHex(2),
            getRandomColorHex(3),
            getRandomColorHex(4),
            "#7F7E7F",
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
