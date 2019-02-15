import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { otherScore } from '../../app/model';
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
  areaPolitical: string;
  urlPowerBi: string;
  namekad: string;
  data: any = {};
  chart: [any];
  listScoreParty: ElectionModel[] = [];
  other: otherScore = new otherScore;
  listOther: any[];

  @ViewChild('barCanvas') barCanvas;
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public http: HttpClient) {
    this.areaPolitical = this.navParams.get('idArea');
    this.namekad = this.navParams.get('nameArea');
    console.log("areaPolitical");
    console.log(this.areaPolitical);
  }

  ionViewDidEnter() {
    this.http.get<ElectionModel[]>("https://electionvars.azurewebsites.net/api/ElectionV3/GetAreaTable2/" + this.areaPolitical).subscribe(
      it => {
        this.listScoreParty = it
        console.log("this.tokenHaves");
        console.log(this.listScoreParty);
        let count = 0;
        this.listOther = [];
        this.listScoreParty.forEach(data => {
          if (count > 4) {
            this.listOther.push(data);
          }
          count += 1;
        });
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
              label: ['คะแนนของ'],
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



