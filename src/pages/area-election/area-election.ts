import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as pbi from 'powerbi-client';
import { models, IEmbedConfiguration } from 'powerbi-client';

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
  [x: string]: any;

  areaPolitical: string;
  urlPowerBi: string;
  token: any = {};
  data: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    this.data = this.navParams.get('tokenid');
    console.log("token");
    console.log(this.data);
  }

  ionViewDidEnter() {
    this.areaPolitical = this.navParams.data._areaPolitical;
    let accessToken = this.data;
    let embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=f8e570be-3b86-4ba0-8000-280dd77e6bea&groupId=50ffda63-4985-4fdf-b052-c78cee9263ff';
    let embedReportId = 'f8e570be-3b86-4ba0-8000-280dd77e6bea';
    const basicFilter: pbi.models.IBasicFilter = {
      $schema: "http://powerbi.com/product/schema#basic",
      target: {
        table: "Data",
        column: "NameKad",

      },
      operator: "In",
      values: [this.areaPolitical],
      filterType: pbi.models.FilterType.BasicFilter
    }

    let config: IEmbedConfiguration = {
      type: 'report',
      tokenType: models.TokenType.Embed,
      accessToken: accessToken,
      embedUrl: embedUrl,
      id: embedReportId,
      permissions: models.Permissions.All,
      filters: [basicFilter],
      width: 450,
      height: 450,
      settings: {
        filterPaneEnabled: false,
        navContentPaneEnabled: false,
        layoutType: models.LayoutType.MobilePortrait,
        customLayout: {
          pageSize: {
            type: models.PageSizeType.Widescreen,

          },
          displayOption: models.DisplayOption.FitToPage,
          pagesLayout: {
          }
        }
      }


    };
    let reportContainer = <HTMLElement>document.getElementById('reportContainer');
    let powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory);
    let report = powerbi.embed(reportContainer, config);
    report.off("loaded");
    // report.on("loaded", function () {
    //   console.log("Loaded");
    // });
  }

  // back(){
  //   // this.navCtrl.pop();
  //   this.viewCtrl.dismiss();
  // }
}



