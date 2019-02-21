import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScoreParty, otherScore } from '../../app/model';
import { Chart } from 'chart.js';
/**
 * Generated class for the PoliticalPartyScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-political-party-score',
  templateUrl: 'political-party-score.html',
})
export class PoliticalPartyScorePage {

  listScoreParty: ScoreParty[];
  listScoreOther: ScoreParty[];
  other: otherScore = new otherScore;
  chart: [any];
  @ViewChild('barCanvas') barCanvas;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidEnter() {
    this.listScoreParty = this.navParams.get('_listScoreParty');
    this.listScoreOther = [];
    let count = 0;
    this.listScoreParty.forEach(data => {
      if (count > 4) {
        this.listScoreOther.push(data);
      }
      count += 1;
    });
    console.log(this.listScoreOther);

    this.other = { name: "อื่นๆ", score: 0 };
    this.listScoreOther.forEach(data => {
      this.other.score += data.haveScore;
    });
    console.log(this.other.score);
    this.chart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        // labels: ["BJP", "INC", "AAP", "CPI", "CPI-M", "NCP"],
        labels: [this.listScoreParty[0].nameInitial, this.listScoreParty[1].nameInitial, this.listScoreParty[2].nameInitial
          , this.listScoreParty[3].nameInitial, this.listScoreParty[4].nameInitial, this.other.name],
        datasets: [{
          label: ['คะแนนพึงมี'],
          // data: [200, 50, 30, 15, 20, 34],
          data: [this.listScoreParty[0].haveScore, this.listScoreParty[1].haveScore, this.listScoreParty[2].haveScore
            , this.listScoreParty[3].haveScore, this.listScoreParty[4].haveScore, this.other.score],
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
