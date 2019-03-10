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
  data: any;

  @ViewChild('barCanvas') barCanvas;
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, public http: HttpClient) {
    this.data = this.navParams.get('_area');
    console.log("this.data");
    console.log(this.data);

    // this.namekad = this.navParams.get('nameArea');
  }

  ionViewDidEnter() {

    this.area = this.navParams.get('_area');
    this.http.get<ScoreArea[]>(GlobalVaraible.host + "GetAreaTable2/" + this.area.idArea).subscribe(
      data => {
        this.listScoreParty = data;
        let xxx = this.listScoreParty;
        console.log(this.listScoreParty);
        this.listOther = this.listScoreParty.slice(5);
        this.other = { name: "อื่นๆ", score: 0 };
        this.listOther.forEach(data => {
          this.other.score += data.score;
        });


        function getRandomColorHex(index) {
          for (let i = 0; i < xxx.length; i++) {
            var color = "";
            if (xxx[index].nameInitial == "อนค.") {
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
            } else if (xxx[index].nameInitial == "พ.พ.ช.") {
              color = "#CD0000"
            } else if (xxx[index].nameInitial == "ปชช.") {
              color = "#FFFF00"
            } else if (xxx[index].nameInitial == "ปช.") {
              color = "#CD0000"
            } else {
              color = "#7F7E7F"
            }
            // else if (xxx[i].nameInitial == "ชทพ.") {
            //   color = "#00008B"
            // } else if (xxx[i].nameInitial == "ปชป.") {
            //   color = "#00BFFF"
            // } else {
            //   color = "#FF33FE"
            // }
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
            labels: [this.listScoreParty[0].nameInitial, this.listScoreParty[1].nameInitial, this.listScoreParty[2].nameInitial
              , this.listScoreParty[3].nameInitial, this.listScoreParty[4].nameInitial, this.other.name],
            datasets: [{
              label: ['คะแนนของแต่ละพรรคใน' + this.area.nameArea],
              data: [this.listScoreParty[0].score, this.listScoreParty[1].score, this.listScoreParty[2].score
                , this.listScoreParty[3].score, this.listScoreParty[4].score, this.other.score],
              backgroundColor: [
                getRandomColorHex(0),
                getRandomColorHex(1),
                getRandomColorHex(2),
                getRandomColorHex(3),
                getRandomColorHex(4),
                "#7F7E7F",
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



