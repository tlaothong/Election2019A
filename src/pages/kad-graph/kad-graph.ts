import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as pbi from 'powerbi-client';
import { models, IEmbedConfiguration } from 'powerbi-client';
import { ScoreParty, otherScore } from '../../app/model';
import { Chart } from 'chart.js';

/**
 * Generated class for the KadGraphPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kad-graph',
  templateUrl: 'kad-graph.html',
})
export class KadGraphPage {
  listScoreParty: ScoreParty[];
  listScoreOther: ScoreParty[];
  other: otherScore = new otherScore;
  chart: [any];
  @ViewChild('barCanvas') barCanvas;
  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidEnter() {
    this.listScoreParty = this.navParams.get('_listScoreParty');
    this.listScoreParty.sort((a, b) => b.areaScore - a.areaScore);
    this.listScoreOther = this.listScoreParty.slice(5);
    // let count = 0;
    // this.listScoreParty.forEach(data => {
    //   if (count > 4) {
    //     this.listScoreOther.push(data);
    //   }
    //   count += 1;
    // });
    console.log(this.listScoreOther);

    this.other = { name: "อื่นๆ", score: 0 };
    this.listScoreOther.forEach(data => {
      this.other.score += data.areaScore;
    });
    console.log(this.other.score);
    this.chart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        // labels: ["BJP", "INC", "AAP", "CPI", "CPI-M", "NCP"],
        labels: [this.listScoreParty[0].partyName, this.listScoreParty[1].partyName, this.listScoreParty[2].partyName
          , this.listScoreParty[3].partyName, this.listScoreParty[4].partyName, this.other.name],
        datasets: [{
          label: ['คะแนนแบบแบ่งเขต'],
          // data: [200, 50, 30, 15, 20, 34],
          data: [this.listScoreParty[0].areaScore, this.listScoreParty[1].areaScore, this.listScoreParty[2].areaScore
            , this.listScoreParty[3].areaScore, this.listScoreParty[4].areaScore, this.other.score],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
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
