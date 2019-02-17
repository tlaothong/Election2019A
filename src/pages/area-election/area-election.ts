import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { otherScore, ScoreArea, GlobalVaraible } from '../../app/model';
/**
 * Generated class for the AreaElectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-area-election',
  templateUrl: 'area-election.html',
})
export class AreaElectionPage {
  chart: [any];
  listScoreParty: ScoreArea[] = [];
  other: otherScore = new otherScore;
  listOther: any[];
  area: ScoreArea = new ScoreArea;

  @ViewChild('barCanvas') barCanvas;
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public http: HttpClient) {
    // this.idArea = this.navParams.get('idArea');
    // this.namekad = this.navParams.get('nameArea');
  }

  ionViewDidEnter() {

    this.area = this.navParams.get('_area');
    this.http.get<ScoreArea[]>(GlobalVaraible.host + "GetAreaTable2/" + this.area.idArea).subscribe(
      data => {
        this.listScoreParty = data;
        console.log(this.listScoreParty);
        this.listOther = this.listScoreParty.slice(5);
        this.other = { name: "อื่นๆ", score: 0 };
        // this.other = { name: "อื่นๆ", score: 0 };
        this.listOther.forEach(data => {
          this.other.score += data.score;
        });
        this.chart = new Chart(this.barCanvas.nativeElement, {
          type: 'bar',
          data: {
            // labels: ["BJP", "INC", "AAP", "CPI", "CPI-M", "NCP"],
            labels: [this.listScoreParty[0].nameParty, this.listScoreParty[1].nameParty, this.listScoreParty[2].nameParty
              , this.listScoreParty[3].nameParty, this.listScoreParty[4].nameParty, this.other.name],
            datasets: [{
              label: ['คะแนนของแต่ละพรรคใน' + this.area.nameArea],
              // data: [200, 50, 30, 15, 20, 34],
              data: [this.listScoreParty[0].score, this.listScoreParty[1].score, this.listScoreParty[2].score
                , this.listScoreParty[3].score, this.listScoreParty[4].score, this.other.score],
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
      });
  }
}



